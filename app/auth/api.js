'use strict'

const store = require('./../store')
const config = require('./../config')

const signUp = (data) => {
  console.log(config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// make POST games API call to create game
const newGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const playGame = (game) => {
  // console.log('the game id', game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + game._id,
    method: 'PATCH',
    data: game,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  playGame
}
