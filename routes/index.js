const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/users',homeController.user);
router.get('/signin',homeController.signIn);
router.get('/signup',homeController.signUp);
router.post('/users/create',homeController.create);
module.exports = router;