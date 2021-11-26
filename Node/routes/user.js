const express = require('express');
const userControllers = require('../controller/user');
const router = express.Router();

router.get('/',userControllers.getAllUsers);
router.post('/',userControllers.addUser);
router.put('/:id',userControllers.updateUser);
router.delete('/:id',userControllers.deleteUser);





module.exports = router