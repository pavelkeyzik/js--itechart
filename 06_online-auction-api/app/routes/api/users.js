const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');

router.get('/', UsersController.getListOfUsers);
router.post('/', UsersController.addNewUser);
router.get('/:id', UsersController.getUser);

module.exports = router;
