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
  // resets the state of 'over'
  gameOver = false
  // resets the board to become clickable again
  $('.div-box').attr('disabled', 'false')
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
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
  console.log(gameOver)
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
  // looping through our winningIndexes
  const checkForWin = () => {
    if (apiCells[cellIndex] !== '') {
      $('#message').text(`It's ${player}'s turn`)
    }
    for (let i = 0; i < winningArray.length; i++) {
      // variable to get the individual indexes within our array
      const winIndex = winningArray[i]
      // conditionals to check for empty spaces or win condition
      if (
        apiCells[winIndex[0]] === '' ||
        apiCells[winIndex[1]] === '' ||
        apiCells[winIndex[2]] === ''
      ) {
        continue
      } else if (
        apiCells[winIndex[0]] === apiCells[winIndex[1]] &&
        apiCells[winIndex[1]] === apiCells[winIndex[2]]
      ) {
        gameOver = true
      }
    }
    if (gameOver === true) {
      $('#message').text(`Player ${player} has won!`)
      // disable div box clicks
      return
    }
    if (!apiCells.includes('')) {
      $('#message').text('Draw!, Try Again!')
      // disable div box clicks
    }
  }
  checkForWin()

  api.playGame(game).then(ui.onPlayGameSuccess).catch(ui.onPlayGameFailure)

  // changes player from 'X' to 'O'
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
// not be able to change value when clicked and disable board
