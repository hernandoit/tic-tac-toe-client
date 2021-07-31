'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
/** * GLOBAL VARIABLES * **/
// sets the players turn to 'x'
let turn = true

const onSignUp = (e) => {
  // prevents the click event from refreshing the page
  e.preventDefault()
  // get info from event and form
  const form = e.target
  const data = getFormFields(form)
  // make an api call using ajax
  api.signUp(data)
    // handle successful API calls with .then
    .then(ui.onSignUpSuccess)
    // Handle failed API calls with .catch
    .catch(ui.onSignUpFailure)
}

const onSignIn = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
// we don't pass the (e) event because we already have the token and there is nothing to submit
const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)

  // sets player to 'X' at start of game
  turn = true
  return true
}

const onPlayGame = (e) => {
  // prevents the click event from refreshing the page
  e.preventDefault()
  // variable to hold the click event
  const divBox = e.target
  // variable to store which div data-cell-index was clicked
  const cellIndex = $(divBox).data('box-index')
  // logic to make player 'x' or 'o' based on a boleen value
  const player = turn ? 'X' : 'O'
  // variable to store the game APIs cells
  const apiCells = store.game.cells
  // sets the game APIs cells with our click events players value
  apiCells[cellIndex] = player
  // variable to check if a box has is empty
  const boxValue = $($('.div-box')[cellIndex]).text()
  // logic to stops the game
  if (store.game.over) return
  // conditional that checks if a box is empty
  if (boxValue) {
    // $('#message').text(`It's ${player}'s turn`)
    return
  }
  // call back function to check for a winner
  checkForWin()

  // sets the game APIs index/value/over values
  const game = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: store.game.over
    }
  }

  api.playGame(game)
    .then(ui.onPlayGameSuccess)
    .catch(ui.onPlayGameFailure)

  // changes player from 'X' to 'O'
  turn = !turn
  return turn
}

const checkForWin = () => {
  // logic to make player 'x' or 'o' based on a boleen value
  const player = turn ? 'X' : 'O'
  // variable to store the game APIs cells
  const apiCells = store.game.cells
  // variable to hold an array of winning indexes
  const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  // looping through our winningIndexes
  for (let i = 0; i < winningArray.length; i++) {
    // variable to get the individual indexes within our array
    const winIndex = winningArray[i]
    if (
      apiCells[winIndex[0]] === '' ||
      apiCells[winIndex[1]] === '' ||
      apiCells[winIndex[2]] === ''
    ) {
      continue
    }
    if (
      apiCells[winIndex[0]] === apiCells[winIndex[1]] &&
      apiCells[winIndex[1]] === apiCells[winIndex[2]]
    ) {
      store.game.over = true
    }
  }
  if (store.game.over === true) {
    $('#message').text(`Player ${player} has won!`)
    return
  }
  if (!apiCells.includes('')) {
    $('#message').text('Draw!, Try Again!')
  }
}
// VERSION 2 ADDITIONAL LOGIC
const onShowSignIn = () => {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#message').text('')
}

const onShowSignUp = () => {
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#message').text('')
}

const onShowChangePassword = () => {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#change-password').show()
  $('#btn-change-password').hide()
}

const onChangePassword = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  const passwords = {
    passwords: {
      old: data.passwords.old,
      new: data.passwords.new
    }
  }
  api.changePassword(passwords)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlayGame,
  onShowSignIn,
  onShowSignUp,
  onShowChangePassword,
  onChangePassword
}
