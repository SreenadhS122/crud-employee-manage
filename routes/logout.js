const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const {logout} = require('../controllers/logoutController');

router.get('/logout',auth,logout);

module.exports = router;