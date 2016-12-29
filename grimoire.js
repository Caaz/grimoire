const Discord = require('discord.js')

let client
const config = {
  prefix: '~'
}
const commands = {}
module.exports = {
  init(cfg) {
    Object.assign(config, cfg)
    client = new Discord.Client()
    return this
  },
  register(plugins) {
    delete plugins._config
    Object.assign(commands, plugins)
    return this
  },
  start(token) {
    client.on('message', message => {
      if(message.content.startsWith(config.prefix)) {
        const args = message.content.substr(1).split(' ')
        const trigger = args.shift().toLowerCase()
        for(const key in commands) {
          try {
            if(trigger === key) commands[key](message, args, client, config)
          } catch(err) { console.warn(err) }
        }
      }
    })
    client.login(token)
    return this
  }
}
