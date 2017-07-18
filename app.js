const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.NODE_ENV
const SpikeDatoCMS = require('spike-datocms')
const locals = { foo: 'bar' }
const TOKEN_netlify = process.env

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    root: './views',
    locals,
    // locals: (ctx) => { return { pageId: pageId(ctx) } },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: TOKEN_netlify.dato || 'b81ff04ff31e21752395',
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
