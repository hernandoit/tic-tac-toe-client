// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // link to our events.js logic
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.div-box').on('click', authEvents.onPlayGame)

  // set the default visible state of our logged in and game objects
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#new-game').hide()
  $('#game-board').hide()

  // VERSION 2 ADDITIONAL LOGIC
  $('#link-sign-in').on('click', authEvents.onShowSignIn)
  $('#link-sign-up').on('click', authEvents.onShowSignUp)
  $('#btn-change-password').on('click', authEvents.onShowChangePassword)
  $('#btn-change-password').hide()
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password').hide()
})
