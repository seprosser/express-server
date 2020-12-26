# Node.js Express Server

Just a small project to play about with express.

## TODO List

- [x] Create a good base structure that can be expanded upon
- [x] Sort out an eslint + prettier config - rip the ones from react frontend
- [ ] Refactor so that its using ES6, module.exports is annoying
- [x] Update users model so that is is actually representative of a user
- [x] Sign up endpoint
  - [x] Validate provided user credentials
  - [x] Hash password (bcrypt + salt)
  - [x] Store in the database
- [ ] Login endpoint
  - [ ] Validate user credentials
  - [ ] Return JWT
- [ ] Authentication middleware to validate token and pass request to controller if successful

## Extra Stuff

- [ ] Look into Heroku vs AWS
- [ ] Dockerize
