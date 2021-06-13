module.exports = {
  devServer: {
    proxy: {
      ajax: {
        target: 'https://m.maoyan.com',
        ChangeOrigin: true
      },
      api: {
        target: 'http://192.168.10.109:8080',
        ChangeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api2': {
//         target: 'http://localhost:3000',
//         changeOrigin: true
//       },
//       '/api': {
//         target: 'http://39.97.33.178',
//         changeOrigin: true
//       }
//     }
//   }
// }
