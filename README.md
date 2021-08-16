# Tic Tac Toe

This is a tic-tac-toe game using the SPA (single page application) methodology.  A user must first login to click on a button to show the grid to play the game.  The user will then start by playing 'X' and then 'O' until the game ends with a win/draw.

## `Setup Steps`
1. Fork and clone this repository.
2. Create a new branch for your work.
3. Checkout to your new branch name.
4. Install dependencies with ```npm install```.

## `Important Links`
[Deployed Client](https://hernandoit.github.io/tic-tac-toe-client/)

[Game Project API](https://git.generalassemb.ly/ga-wdi-boston/game-project-api)

## `Planning Story`

### `Application Requirements`
#### `MVP`
- User must be able to sign up
- User must be able to sign in
- Signed in user must be able to sign out
- Signed in user user must be able to start a tic tac toe game
- When playing game, user must start as X and then rotate between X and O
- When playing game, user must only select available spaces on the board
- When playing game, user must be notified of win or tie
- Once a game is over, user must not be able to add to that board
- Once a game is over, user must be able to play again
#### `Black Diamond`
- Utilize CSS/Sass/Bootstrap to completely style your application.
- Signed in user must be able to change password
- Signed in user must be able to view number of games played
- Display messaging when the user:
  - tries to click on an occupied spot on the board during a game
  - tries to click on the board after game is over
  - starts a new game successfully (or unsuccessfully)
#### `Double Black Diamond`
- Ensure your game is responsive, and can be played on mobile phone, tablet, and desktop size screens.
- View Previous Games
  - User can view their previous game boards.
  - Note: utilize the GET /games end point
- Finish Incomplete Games
  - User can continue their unfinished games.
  - Note: Utilize the GET /games end point
- Custom Tokens
  - User can play as something other than X or O
  - Note: The API will still expect x and o data
- Play Against Computer
  - User has option to play against a computer.
  - Note: The computer will still need to update the API
- Automatic Sign In
  - User should be signed in automatically after signing up successfully.
  - Note: leverage your promise chain and combining API calls
- Stay Signed In
  - Read up on localStorage and implement the user to optionally stay signed in on page refresh
  - Note: The localStorage-study

### `API Requirements`
#### `MVP`
- Sign up [POST /sign-up](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signup)
- Sign in [POST /sign-in](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signin)
- Sign out [DELETE /sign-out](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signout)
- New game [POST /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create)
- Update game [PATCH /games/:id](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update)
- Display a message to the user after sign in, sign up, and sign out success or failure.
- Sign in and sign up forms must clear after submit success
#### `Black Diamond`
- View number of games played [GET /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index)
- Change password [PATCH /change-password](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#changepw)

### `Professional Requirements`
#### `MVP`
- Do not delete your repository at any time or start over.
- Do not rely on refreshing the page for any functionality.
- Do not have any user-facing bugs.
- Display non-functional buttons, nor buttons that do not successfully complete a task.
- Show actions at inappropriate times (example: sign out button when not signed in).
#### `Black Diamond`
- Do not use browser alerts or prompts.
- Do not display console logs, errors or warnings in the console.

#### `User Stories`
- As a end user, I want to sign up so that I can have an account
- As a end user, I want to sign in so that I can have access to my account
- As a end user, I want to sign out so that I can not have my account accessed
- As a end user, I want to start a new game so that I play the game
- As a end user, I want to switch between 'X' and 'O' so that I can play both sides
- As a end user, I want to place my marker on the available space so that I don't override my already placed markers
- As a end user, I want to know if i won/draw so that I can know the outcome of my match
- As a end user, I want to let the board be locked once a game is over so that can be prompted to play another game

#### `Technologies Used`
- GitHub
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery

#### `Unsolved Problems`
   1. Would like to do all of the double black diamond level requirements

#### `Images`
[Wire Frame](https://i.imgur.com/xikX6wt.png)
