var ghpages = require('gh-pages')
ghpages.publish('dist/myapp', {
  branch: 'master',
  repo: 'https://github.com/at-dieunguyen/promize-web-deploy.git'
}, function (err) {
  console.log('Deploy Success')
  console.log(err)
})
