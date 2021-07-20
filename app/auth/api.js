'use strict'

const store = require('./../store')

const signUp = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// make POST games API call to create game
const newGame = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token,
      data
    }
  })
}
const playGame = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token,
      data
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
