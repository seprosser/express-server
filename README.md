# Node.js Express Server

Just a small project to play about with express.

## TODO List

- [x] Create a good base structure that can be expanded upon
- [ ] Sort out an eslint + prettier config - rip the ones from react frontend
- [ ] Refactor so that its using ES6, module.exports is annoying
- [ ] Update users model so that is is actually representative of a user
- [ ] Sign up endpoint
  - [ ] Validate provided user credentials
  - [ ] Hash password (bcrypt + salt)
  - [ ] Store in the database
- [ ] Authentication middleware to validate token and pass request to controller if successful
- [ ] Login endpoint
  - [ ] Validate user credentials
  - [ ] Return JWT

## Extra Stuff

- [ ] Look into Heroku vs AWS
- [ ] Dockerize
