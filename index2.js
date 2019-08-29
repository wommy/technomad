const fs = require('fs')
const path = require('path')

const ejs  = require('ejs')

const data = require('./views/_data.js')

const templatePath = path.resolve(__dirname, 'views/_template.ejs')
const templateStr = ejs.fileLoader(templatePath,'utf-8')
const template = ejs.compile(templateStr, { filename: templatePath});

const index = template(data)

fs.writeFileSync('_out/_template.html', index)