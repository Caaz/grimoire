
const mkdirp = require('mkdirp')
const config = require('./config')
const grimoire = require('./src/grimoire')

mkdirp('./tmp')

grimoire.init({prefix: '~'})
.register(require('./plugins/stalk'))
.register(require('./plugins/admin'))
.start(config.token)
