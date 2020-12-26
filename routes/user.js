// routes/user.js

const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/signUp', controller.signUp);
router.post('/login', controller.login);

module.exports = router;
