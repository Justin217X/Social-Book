const express = require('express');
const router = express.Router();
const userController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles')


router.route('/')
    .get(userController.getAllUsers)
    .post(verifyRoles(ROLES_LIST.User), userController.createNewUser)
    .put(verifyRoles(ROLES_LIST.User), userController.updateUser)
    .delete(verifyRoles(ROLES_LIST.User), userController.deleteUser);

router.route('/:id')
    .get(userController.getUser);

module.exports = router;