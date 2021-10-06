const router = require('express').Router();
const users = require('./users');
const apartments = require('./apartments');
const posts = require('./comments');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/apartments', apartments);
router.use('/posts', posts);
router.use('/test', test);

module.exports = router;
