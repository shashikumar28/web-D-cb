const dog = require('./dog')
const cat = require('./cat')

//module.exports = {}//by default
//module.exports = 'sam'

//whenever you require anyfolder then the index.js inside that folder is responsible for the exportsof of it

module.exports = {cat , dog}