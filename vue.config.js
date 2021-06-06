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
