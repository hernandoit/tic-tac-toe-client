'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
/** * GLOBAL VARIABLES * **/
// sets the players turn to 'x'
let turn = true
// sets the 'over' value to false
let gameOver = false
//
let gameWon = false

const onSignUp = (e) => {
  // prevents the click event from refreshing the page
  e.preventDefault()
  // get info from event and form
  const form = e.target
  const data = getFormFields(form)

  // make an api call using ajax
  api
    .signUp(data)
    // handle successful API calls with .then
    .then(ui.onSignUpSuccess)
    // Handle failed API calls with .catch
    .catch(ui.onFailure)
}

const onSignIn = (e) => {
  e.preventDefault()

  const form = e.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}
// we don't pass the (e) event because we already have the token and there is nothing to submit
const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewGame = (e) => {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
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
  // variable to change APIs 'over' key value
  gameOver = store.game.over
  // variable to hold an array of winning indexes
  const winningIndexes = [
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
  const checkForWin = () => {
    for (let i = 0; i < winningIndexes.length; i++) {
      // variable to get the individual indexes within our array
      const win = winningIndexes[i]
      // variables to refer to the individual indexes
      const a = apiCells[win[0]]
      const b = apiCells[win[1]]
      const c = apiCells[win[2]]
      // conditionals to check for empty spaces
      if (a === '' || b === '' || c === '') {
        continue
      } else if (a === b && b === c) {
        gameOver = true
        break
      }
    }
    if (gameOver) {
      $('#message').text(`Player ${player} has won!`)
      gameWon = true
    }
  }
  checkForWin()
  // sets the game APIs index/value/over values
  const game = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: gameOver
    }
  }

  // if (apiCells[cellIndex] !== '' || gameWon) {
  //   // set message text
  //   $('#message').text(`It's ${player}'s turn`)
  //   return
  // }

  // 'Game ended in a draw!'
  api.playGame(game).then(ui.onPlayGameSuccess).catch(ui.onFailure)

  // changes player from 'x' to 'o'
  turn = !turn
  return turn
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlayGame
}
