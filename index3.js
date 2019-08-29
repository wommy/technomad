const fs = require('fs')
const path = require('path')

const ejs  = require('ejs')

const data = require('./views/_data.js')

const templatePath = path.resolve(__dirname, 'views/_template.ejs')
const templateStr = ejs.fileLoader(templatePath,'utf-8')


console.log(ejs.renderFile(templatePath, data))


// fs.writeFileSync(template)