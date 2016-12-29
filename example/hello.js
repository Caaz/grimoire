const grimoire = require('../src/grimoire')

grimoire.init({
  // set ! to be our prefix, so that not just any line of text will execute it.
  prefix: '!'
})
.register({
  // register hello as a command.
  hello(message) {
    message.reply('Hello, ' + message.author.username + '!')
  }
})
// start and connect to our thing, token should be replaced with an actual one.
.start('token')
