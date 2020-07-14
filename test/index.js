// let source = `
//     data:666pxccc;
//     data:ppp888pxccc;
//     [a]:100.123px;
//     [b]: 200.123px;
//     [c]: hi(300.123px, 400.123px);
//     [d]: hi(500px,600px);
//     e: hi(666px,888pxppp);
//     [f]: 700px 800px / 900px;
//     [f]: 700px 800px/900px;
//     [g]:999px

//     [a]: 2px;
//     b: 12Px;
//     [c]: 12px;
//     [d]:12px;
//     [e]:2px;
// `;

// let source =
// `
//     [d]: hi(500px,600px);
//     [f]: 700px 800px / 900px;
//     [f]: 700px 800px/900px;
// `;

let source =
`
    [a]: 2px;
    b: 12Px;
    [c]: 12px;
    [d]:12px;
    [e]:2px;
`;

console.log("未处理前：", source);
const res = px2Loader(source);
console.log("处理后", res);
