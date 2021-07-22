// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  Particles.init({
    selector: '.background',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.div-box').on('click', authEvents.onPlayGame)
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#game-board').hide()
})
