const mkdirp = require('mkdirp')
const grimoire = require('../grimoire')
const config = require('./config')

mkdirp(config.tmp)

grimoire.init(config)
.register(require('../plugins/stalk')._config({config}))
.register(require('../plugins/admin'))
.start(config.token)
