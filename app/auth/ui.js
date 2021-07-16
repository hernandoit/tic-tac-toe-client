'use strict'
const store = require('./../store')

const onFailure = () => {
  $('#message').text('failure')
  $('#sign-up').trigger('reset')
  $('.game-board').hide()
}

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('.game-board').hide()
}

const onSignInSuccess = (response) => {
  $('#message').text(`${response.user.email} is signed in`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('.game-board').hide()
  $('#new-game').show()
}

const onSignOutSuccess = () => {
  // $('#message').text(`$as been signed out`)
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.game-board').hide()
}

const onNewGameSuccess = (response) => {
  console.log(response)
  $('.game-board').show()
}
module.exports = {
  onFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess
}
