// routes/user.js

const router = require('express').Router();
const controller = require('../controllers/user');

router.get('/signUp', controller.signUp);
router.get('/login', controller.login);

module.exports = router;
