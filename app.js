const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env
const SpikeDatoCMS = require('spike-datocms')
const locals = { }

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ root: './views', locals }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: env.DATO_API_TOKEN,
      models: [{
        name: 'post',
        template: {
          path: 'views/_post.sgr',
          output: (post) => { return `blog/${post.title}.html` }
        }
      },{
        name: 'page',
        template: {
          path: 'views/_page.sgr',
          output: (page) => { return `/${page.title}.html` }
        }
      }]
    })
  ]
}
