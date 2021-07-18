'use strict'
const store = require('./../store')

const onFailure = (response) => {
  $('#message').text('error', response)
  $('#sign-up').trigger('reset')
  $('#game-board').hide()
}

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#game-board').hide()
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
}

const onSignOutSuccess = () => {
  $('#message').text('You have been successfully logout')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
}

const onNewGameSuccess = (response) => {
  store.token = response.user.token
  $('#game-board').show()
  // populate board logic
  $('#created-book').html(`
    <h3>Title: ${response.book.title}</h3>
    <p>Author: ${response.book.author}</p>
  `)
}

module.exports = {
  onFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess
}
