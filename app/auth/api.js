'use strict'

const store = require('./../store')
const config = require('./../config')

const signUp = (data) => {
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
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
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
