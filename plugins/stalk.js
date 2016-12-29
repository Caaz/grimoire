const {spawn} = require('child_process')

const config = {
  tmp: './tmp'
}
module.exports = {
  _config(cfg) {
    Object.assign(config, cfg)
    return this
  },
  stalk(message) {
    spawn('fswebcam', ['--no-timestamp', '--no-overlay', '--no-banner', './tmp/camera.jpg'])
    .on('close', () => {
      message.channel.sendFile(config.tmp + '/camera.jpg', 'probably_caaz.jpg', 'Ayy, a caaz')
    })
  },
  screen(message) {
    spawn('import', ['-window', 'root', './tmp/screen.png'])
    .on('close', () => {
      message.channel.sendFile(config.tmp + '/screen.png', 'not_porn.png', 'Ayy, a screenshot')
    })
  }
}
