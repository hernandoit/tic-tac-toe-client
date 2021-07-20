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
  $('game-choice-btn').hide()
}
const onNewGameSuccess = (response) => {
  //  Display New Game button when a user signs in
  $('#game-choice-btn').show()
  // When New Game button is clicked display game board
  $('#game-board').show()
  $('#message').text('')
  // Save the API response so you have access to the game ID and cells
  store.game = response.game

  // Add a click handler for when a space on the game board is clicked
  $('.div-box').on('click', function () {
    // $('#message').text('clicked!')
  })
  // const divBox = $('.div-box')
  // console.log(divBox[0])
  // response.game.cells.each(function (i) {
  //   if (divBox[i]) {
  //     divBox[i] = response.game.cells[i]
  //   }
  // })
  // target.data("#div-box");

  //  When the user clicks on a space, first check that the space is empty

  //  If they choose a valid space, add their token to the HTML/CSS board and the game cells array

  $('#btn-message').text('Player One is  ')
}

const onPlayGameSuccess = (response) => {

}

module.exports = {
  onFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onPlayGameSuccess
}
