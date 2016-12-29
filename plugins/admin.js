module.exports = {
  echo(message, args) {
    console.log(message.author)
    message.reply(args)
  },
  '!': (message, args, client, config) => {
    if(message.author.id === config.admin) {
      try {
        message.channel.sendCode('javascript', JSON.stringify(eval(args.join(' ')), null, '\t'))
      } catch(err) {
        message.channel.sendCode(null, err)
      }
    }
  }
}
