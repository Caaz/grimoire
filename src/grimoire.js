const Discord = require('discord.js')

let client
const config = {
  prefix: '~'
}
const commands = {}
module.exports = {
  init(cfg) {
    for(const key in cfg) {
      config[key] = cfg[key]
    }
    client = new Discord.Client()
    return this
  },
  register(plugins) {
    for(const i in plugins) {
      if(commands[i]) console.warn('Overwriting previously defined command: ' + i)
      commands[i] = plugins[i]
    }
    return this
  },
  start(token) {
    client.on('message', message => {
      if(message.content.startsWith('~')) {
        const args = message.content.substr(1).split(' ')
        const trigger = args.shift().toLowerCase()
        for(const key in commands) {
          try {
            if(trigger === key) commands[key](message, args, client, config)
          } catch(err) {
            console.warn(err)
          }
        }
      }
    })
    client.login(token)
    return this
  }
}
