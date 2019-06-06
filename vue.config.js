module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 1994,
    proxy: {
      '/api': {
        target: 'http://10.249.40.111',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
