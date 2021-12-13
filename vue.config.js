module.exports = {
  pages: {
    index: {
      entry: "examples/main.ts", //入口
      template: "public/index.html", //模板
      filename: "index.html", //输出文件
    },
  },
  // 强制css内联，不然会导致样式失效问题
  css: { extract: false },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.module.rule("ts").uses.delete("cache-loader");
      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap(opts => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });
    }
  },
  parallel: false
};
