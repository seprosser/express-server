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
- [x] Authentication middleware
  - [x] Check for valid JWT
  - [x] Append user from JWT to request so that it can be used in the next middleware
- [ ] Create basic (protected) routes for adding and deleting todo items (to test auth)
- [ ] (Refactor) Move error handlers into separate middleware functions

## Extra Stuff

- [ ] Look into Heroku vs AWS
- [x] Dockerize
- [ ] Require a CSRF token? Where/How should that be stored? [Useful stackoveflow link](https://stackoverflow.com/questions/47374272/jwt-token-and-csrf)
- [ ] Logout endpoint to clear the cookie and add token to a blacklist (not really required)
- [ ] Refreshing a token when its about to expire

<https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#login_usage>
