const loaderUtils = require("loader-utils");

/**
 * 入口
 * @param {string} source 待处理源码
 * @returns string
 */
function px2Loader(source)
{
    const outerOptions = loaderUtils.getOptions(this); // 获取外部参数

    const options =
    {
        unit: "vh",       // 转换单位
        planW: 1920,      // 设计稿宽度
        planH: 1080,      // 设计稿高度
        digit: 5,         // 保留多少位小数
        ...outerOptions
    };

    if (options.unit === "px")
    {
        return source;
    }

    return replaceSource(source, options);
}

/**
 * 根据配置信息进行单位换算
 * @param {string} source 待处理源码
 * @param {object} options 配置信息
 * @returns string
 */
function replaceSource(source, options)
{
    const rawList = source.match(/[^\s,/:]+px/g);    // 提取
    const list = Array.from(new Set(rawList));       // 去重
    const map = new Map();                           // 存储
    list.forEach(item =>
    {
        const num = Number.parseFloat(item.replace(/px/, "")); // 移除单位转number
        const { unit } = options;

        let value = "";

        // 根据单位类型进行换算
        if (unit === "vh")
        {
            value = px2vh(num, options);
        }

        map.set(item, value);
    });
    // 循环替换
    for (let v of map)
    {
        const [key, value] = v;
        const regExp = new RegExp(key, "g"); // 动态规则
        source = source.replace(regExp, value);
    }

    source = source.replace(/Px|PX/g, "px"); // PX|Px转小写

    return source;
}

/**
 * px转vh
 * @param {number} num px值
 * @param {object} options 配置信息
 * @returns string
 */
function px2vh(num, options)
{
    const { planH, digit, unit } = options;
    return (num / planH * 100).toFixed(digit) + unit; // 单位换算
}

module.exports = px2Loader;