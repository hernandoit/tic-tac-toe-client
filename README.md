# `Tic Tac Toe`

This is a tic-tac-toe game using a SPA (single page application) approach with a sign up and login.  A user must first login to click on a button to show the game board.  The user will then start by playing 'X' and then 'O', alternating until the game ends.  There are two possible results to a game; win/draw.

## `Setup Steps`
1. Fork and clone this repository.
2. Create a new branch for your work.
3. Checkout to your new branch name.
4. Install dependencies with ```npm install```.

## `Important Links`
- [Deployed Client](https://hernandoit.github.io/tic-tac-toe-client/)

## `Planning Story`
- Create a Sign up POST /sign-up
- Create a Sign in POST /sign-in
- Create aSign out DELETE /sign-out
- Create a New game POST /games
- Update game PATCH /games/:id
- Display a message to the user after sign in, sign up, and sign out success or failure.
- Sign in and sign up forms must clear after submit success
- Build your own web application that is hosted live on the web
- Separate HTML, CSS, and JavaScript files in your application
- Build an application to a spec that someone else gives you
- Use your programming skills to solve the game logic for a game
- Code an interactive game that allows a user to play tic tac toe against themselves
- Communicate with a back-end (which is prebuilt) to store the state of your game.
- Craft a README.md file that explains your app to the world


#### `Wireframe`

[Wire Frame Layout](https://i.imgur.com/xikX6wt.png)

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
- HTML5
- SCSS
- Bootstrap
- Javascript
- jQuery

#### `Unsolved Problems`
- Would like to have user play against another player or a computer
- Would like to change the colors of the 'X' and 'O'
- Would like to have the player choose if they want to be 'X' and 'O'
- Would like to eventually have a backend to store user state data
