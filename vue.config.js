module.exports = {
  devServer: {
    proxy: {
      ajax: {
        target: 'https://m.maoyan.com',
        ChangeOrigin: true
      }
    }
  }
}
