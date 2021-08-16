'use strict'
const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
  $('#sign-out-nav').hide()
  $('#sign-in').show()
  $('#sign-in-nav').show()
  $('#sign-up').hide()
  $('#sign-up-nav').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#change-password-nav').show()
}

const onSignUpFailure = () => {
  $('#message').text('Sign Up Failed, please try again!')
  $('#sign-out-nav').hide()
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#change-password-nav').hide()
}
const onSignInSuccess = (response) => {
  $('#message').text(`${response.user.email} is signed in`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-in-nav').hide()
  $('#sign-up').hide()
  $('#sign-up-nav').hide()
  $('#sign-out-nav').show()
  $('#game-board').hide()
  $('#new-game').show()
  $('#change-password').hide()
  $('#change-password-nav').show()
}

const onSignInFailure = () => {
  $('#message').text('Sign In Failed, please try again!')
  $('#sign-out-nav').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#change-password-nav').hide()
}

const onSignOutSuccess = () => {
  $('#message').text('You have been successfully logout')
  $('#sign-in').hide()
  $('#sign-in-nav').show()
  $('#sign-up').hide()
  $('#sign-up-nav').show()
  $('#sign-out-nav').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#change-password-nav').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Something went wrong, you are not signed out!')
}
const onChangePasswordSuccess = () => {
  $('#change-password').trigger('reset')
  $('#message').text('Your password has been changed, please log back in!')
  $('#sign-in').show()
  $('#sign-in-nav').show()
  $('#sign-up').hide()
  $('#sign-up-nav').show()
  $('#sign-out-nav').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#change-password-nav').hide()
}

const onChangePasswordFailure = () => {
  $('#message').text('Unable to change password, please try again!')
}

const onNewGameSuccess = (response) => {
  $('#game-board').trigger('reset')
  // When New Game button is clicked display game board
  $('#game-board').show()
  // clears the board for a new game
  $('.div-box').html('')
  // clears message
  $('#message').text('')
  // sets the visibility of the change password form
  $('#change-password').hide()
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

const onShowSignup = () => {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#sign-out-nav').hide()
  $('#new-game').hide()
  $('#game-board').hide()
}

const onShowSignin = () => {
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-out-nav').hide()
  $('#new-game').hide()
  $('#game-board').hide()
}

const onShowLogo = () => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out-nav').hide()
  $('#new-game').hide()
  $('#game-board').hide()
}

const onShowChangePassword = () => {
  $('#sign-out-nav').show()
  $('#sign-in').hide()
  $('#sign-in-nav').hide()
  $('#sign-up').hide()
  $('#sign-up-nav').hide()
  $('#game-board').hide()
  $('#change-password').show()
}

const onGamesPlayedSuccess = (response) => {
  const games = response.games

  let gamesHtml = ''

  games.forEach((game) => {
    gamesHtml += `<tr>
    <td>${game.owner}</td>
    <td>${store.game.__v}</td>
  </tr>`
  })

  $('#games-played').html(gamesHtml)
}

const onGamesPlayedFailure = () => {

}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onPlayGameSuccess,
  onPlayGameFailure,
  onShowSignup,
  onShowSignin,
  onShowChangePassword,
  onShowLogo,
  onGamesPlayedSuccess,
  onGamesPlayedFailure
}
