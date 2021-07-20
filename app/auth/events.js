'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

let turn = true

const onSignUp = (e) => {
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
  e.preventDefault()
  const divBox = e.target

  const cellIndex = $(divBox).data('box-index')
  const player = turn ? 'x' : 'o'
  // console.log('this is the cellIndex  ', cellIndex)
  // console.log('this is the player  ', player)
  store.game.cells[cellIndex] = player
  // console.log('this is store game cell clicked ', store.game.cells[cellIndex])
  // console.log('this is the stored game  ', store.game)
  const game = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: false
    }
  }
  api.playGame(game)
    .then(ui.onPlayGameSuccess)
    .catch(ui.onFailure)

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
