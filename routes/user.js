const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.post('/add-user', userController.postUserDetails);

router.get('/get-users', userController.getUserDetails);

router.delete('/delete-user/:userId', userController.deleteUserDetails);

module.exports = router;