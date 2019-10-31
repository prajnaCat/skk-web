const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  ////publicPath:'/',//vue-cli3.3+新版本使用

	////lintOnSave: true,

  ////productionSourceMap: false,

  // configureWebpack: config => {
  //     config.resolve = {
  //       extensions: ['.js', '.vue', '.json',".css"],
  //         alias: {
  //           '@': resolve(__dirname, '/src'),
  //           'assets': resolve(__dirname, '../src/assets'),
  //           'components': resolve(__dirname, '../src/components'),
  //           'view': resolve(__dirname, '../src/view'),
  //         }
  //     }
  // },

  devServer: {
      // 设置主机地址
      host: 'localhost',
        // 设置默认端口
      port: 8088,
        // 设置代理
      proxy: {
        '/api': {//代理api
            target: "http://localhost:8999/", //服务器api地址
            changeOrigin: true, //是否跨域
            // secure: false,  // 如果是https接口，需要配置这个参数
            //ws: true,  // proxy websockets
            pathRewrite: { //重写路径
                "^/api": '/'
            }
        }
      }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        }),
      ]
    }
  },

}


