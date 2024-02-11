const validateToken = require('../middleware/validateTokenHandler');
const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    currentUser
} = require('../conterllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, currentUser)

module.exports = router;