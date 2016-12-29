const {spawn} = require('child_process')
// Make this less linux only, and figure out how to manage what commands don't exist.
// Probably use which.
module.exports = {
  stalk(message) {
    spawn('fswebcam', ['--no-timestamp', '--no-overlay', '--no-banner', './tmp/camera.jpg'])
    .on('close', () => {
      message.channel.sendFile('./tmp/camera.jpg', 'probably_caaz.jpg', 'Ayy, a caaz')
    })
  },
  screen(message) {
    spawn('import', ['-window', 'root', './tmp/screen.png'])
    .on('close', () => {
      message.channel.sendFile('./tmp/screen.png', 'not_porn.png', 'Ayy, a screenshot')
    })
  }
}
