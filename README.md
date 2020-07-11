# px2-loader

| 规则 | 作用                 |
| ---- | -------------------- |
| px   | 根据配置信息进行转换 |
| Px   | 不进行单位转换       |

## Options

| 成员  | 说明           | 类型   | 默认值 |
| ----- | -------------- | ------ | ------ |
| unit  | 转换单位       | string | vh     |
| planW | 设计稿宽度     | number | 1920   |
| planH | 设计稿高度     | number | 1080   |
| digit | 保留多少位小数 | number | 5      |

## 引入方式

**本地引入**

```js
// webpack.config.js
const config =
{
    // ...
    resolveLoader:
    {
        // 配置本地loader路径别名
        alias:
        {
            "px2-loader": resolve("build/loaders/px2")
        }
    },
    module:
    {
        rules:
        [
            {
                test: /\.less$/,
                use:
                [
                    // ...
                    {
                        loader: "px2-loader",
                        options:
                        {
                            unit: "vh",       // 转换单位
                            planW: 1920,      // 设计稿宽度
                            planH: 1080,      // 设计稿高度
                            digit: 5          // 保留多少位小数
                        }
                    },
                    // ...
                ]
            }
        ]
    },
    // ...
}
```

注意: 需要安装依赖`loader-utils`用于获取配置参数
