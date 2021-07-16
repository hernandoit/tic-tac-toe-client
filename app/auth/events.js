'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
const onSignOut = (e) => {
  e.preventDefault()

  api.signOut(e)
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
