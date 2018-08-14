const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');

router.get('/', UsersController.getListOfUsers);
router.get('/:id', UsersController.getUser);

module.exports = router;
