const fs = require('fs')
const ejs  = require('ejs')
const data = require('./test/_data.js')
const template = fs.readFileSync('test/_template.ejs','utf-8')
const compiledText = ejs.render(template, data)

fs.writeFileSync('./test/test.html', compiledText)