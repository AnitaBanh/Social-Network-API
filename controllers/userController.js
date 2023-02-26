const { User } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then((user) => {
        console.log(user);
        if (!user) res.status(400).send("cannot find userId");
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) => {
        console.log(user);
        if (!user) res.status(400).send("no user with this ID");
      })
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  //   PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  addFriend(req, res) {
    console.log("Adding an friend");
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  removeFriend(req, res) {
    console.log("Removing an friend");
    console.log("userid", req.params.userId);
    console.log(req.params.friendId);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
