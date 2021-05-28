const ghpages = require('gh-pages')

ghpages.publish('dist', function(err) {
  console.error('发生错误', error)
})
