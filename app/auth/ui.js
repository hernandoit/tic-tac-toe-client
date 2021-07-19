'use strict'
const store = require('./../store')

const onFailure = (response) => {
  // console.error(response)

  $('#sign-up').trigger('reset')
  $('#game-board').hide()

  const signUpError = document.querySelector('#sign-up')
  signUpError.addEventListener('click', () => {
    $('#message').text('Sign Up Failed')
  })
  const signInError = document.querySelector('#sign-in')
  signInError.addEventListener('click', () => {
    $('#message').text('Sign In Failed')
  })
  const signOutError = document.querySelector('#sign-out')
  signOutError.addEventListener('click', () => {
    $('#message').text('Sign Up Failed')
  })
  const newGameError = document.querySelector('#new-game')
  newGameError.addEventListener('click', () => {
    $('#message').text('New Game Failed')
  })
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
  $('#game-choice-btn').show()
  $('#game-board').show()
  // store.token = response.user.token
  store.id = response.game._id
  const playerOne = {
    choice: 'X'
  }
  // const board = ['', '', '', '', '', '', '', '', '']
  $('#btn-message').text('Player One is  ' + playerOne.choice)
}

module.exports = {
  onFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess
}
