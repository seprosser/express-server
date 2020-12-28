# Node.js Express Server

Just a small project to play about with express.

## TODO List

- [x] Create an extensible project structure
  - [x] Allows for the simple addition of new routes, models, etc.
- [x] Sort out an eslint + prettier config - rip the ones from react frontend
- [ ] Refactor so that its using ES6, module.exports is annoying
- [x] Update users model so that is is actually representative of a user
- [x] Sign up endpoint
  - [x] Validate provided user credentials
  - [x] Hash password (bcrypt)
  - [x] Store in the database
- [x] Login endpoint
  - [x] Validate that the user exists
  - [x] Validate the provided user password (bcrypt compare)
  - [x] Create a 'secure', 'httpOnly' cookie containing the JWT
- [ ] Authentication middleware
  - [ ] Check for valid JWT
  - [ ] If valid pass request to requested route
- [ ] Create basic routes for adding and deleting todo items

## Extra Stuff

- [ ] Look into Heroku vs AWS
- [ ] Dockerize
- [ ] Require a CSRF token? [Useful stackoveflow link](https://stackoverflow.com/questions/47374272/jwt-token-and-csrf)
