// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const showEvents = require('./auth/ui')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-nav').on('click', showEvents.onShowSignup)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-in-nav').on('click', showEvents.onShowSignin)
  $('#sign-out-nav').on('click', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.div-box').on('click', authEvents.onPlayGame)
  $('#logo').on('click', showEvents.onShowLogo)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password-nav').on('click', showEvents.onShowChangePassword)
  // set the default visible state of our logged in and game objects
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out-nav').hide()
  $('#new-game').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#change-password-nav').hide()
})
