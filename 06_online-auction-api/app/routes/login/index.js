const router = require('express').Router();
const AuthorizationController = require('../../controllers/AuthorizationController');

router.post('/', AuthorizationController.login);

module.exports = router;
