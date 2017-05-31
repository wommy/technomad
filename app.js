const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')

module.exports = {
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/_*', '**/.*', 'LICENSE', 'readme.md', 'package-lock.json'],
  reshape: htmlStandards({ locals: { foo: 'bar' } }),
  postcss: cssStandards(),
  babel: jsStandards()
}
