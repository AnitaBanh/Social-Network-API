const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users/:userId
  // `GET` a single user by its `_id`
router.route('/:userId').get(getSingleUser);

// /api/users
  // `POST` a new user:
  router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
  // DELETE to remove user by its _id
router.route('/:userId').get(getSingleUser).delete(deleteUser);

  // PUT to update a user by its _id
router.route('/:userId').get(getSingleUser).put(updateUser);

// /api/users/:userId/friends/:friendId
    // POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

    // DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
