'use strict'
const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#btn-change-password').hide()
}

const onSignUpFailure = () => {
  $('#message').text('Sign Up Failed, please try again!')
  $('#sign-out').hide()
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#btn-change-password').hide()
}
const onSignInSuccess = (response) => {
  $('#message').text(`${response.user.email} is signed in`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#game-board').hide()
  $('#new-game').show()
  $('#change-password').hide()
  $('#btn-change-password').show()
}

const onSignInFailure = () => {
  $('#message').text('Sign In Failed, please try again!')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#btn-change-password').hide()
}

const onSignOutSuccess = () => {
  $('#message').text('You have been successfully logout')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#btn-change-password').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Something went wrong, you are not signed out!')
}

const onNewGameSuccess = (response) => {
  $('#game-board').trigger('reset')
  // When New Game button is clicked display game board
  $('#game-board').show()
  // clears the board for a new game
  $('.div-box').html('')
  // show the sign-out button
  $('#sign-out').show()
  // clears message
  $('#message').text('')
  // change password form
  $('#change-password').hide()
  // change password show form button
  $('#btn-change-password').show()
  // Save the API response so you have access to the game ID and cells
  store.game = response.game
}

const onNewGameFailure = () => {
  $('#message').text('failed to start a new game!')
}

const onPlayGameSuccess = (response) => {
  const divBox = $('.div-box')
  response.game.cells.forEach(function (val, i) {
    divBox[i].innerText = val
  })
}

const onPlayGameFailure = () => {
  $('#message').text('unable to play game!')
}
// VERSION 2 LOGIC
const onChangePasswordSuccess = (response) => {
  $('#message').text('Your password has been successfully changed, please login again!')
}

const onChangePasswordFailure = () => {
  $('#message').text('unable to change password please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onPlayGameSuccess,
  onPlayGameFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
