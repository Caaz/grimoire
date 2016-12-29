module.exports = {
  echo(message, args) {
    console.log(message.author.username)
    message.reply(args)
  },
  '!': (message, args, client, config) => {
    if(message.author.id === config.admin) {
      try {
        message.channel.sendCode(eval(args.join(' ')))
      } catch(err) {
        message.channel.sendCode(err)
      }
    }
  }
}
