'use strict'
const store = require('./../store')

const onFailure = () => {
  $('#message').text('failure')
  $('#sign-up').trigger('reset')
}

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Thank you for signing in ${response.user.email}`)
  store.Token = response.user.userToken
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const onSignOutSuccess = (response) => {
  $('#message').text(`Thank you for signing out ${response.user.email}`)
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

module.exports = {
  onFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess
}
