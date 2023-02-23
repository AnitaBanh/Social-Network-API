const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

  // GET` all users

// /api/users
  // `POST` a new user:
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
  // `GET` a single user by its `_id`
router.route('/:userId').get(getSingleUser);

module.exports = router;
