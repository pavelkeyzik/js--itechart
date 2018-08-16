const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');

router.get('/', UsersController.getListOfUsers);
router.get('/personal-info', UsersController.getPersonalInfo);

module.exports = router;
