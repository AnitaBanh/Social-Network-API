const { User, Thought, Reaction } = require("../models");

async function seedDB() {
  const users = [
    {
      username: "Sue",
      email: "Sue@email.com",
      thoughts: [
        // {
        //   thoughtText: "thought 1",
        //   username: "Sue",
        // },
      ],
      friends: [],
    },
    {
        username: "Bob",
        email: "Bob@email.com",
        thoughts: [
          // {
          //   thoughtText: "thought 2",
          //   username: "Bob",
          // },
        ],
        friends: [],
      },
      {
        username: "Joe",
        email: "Joe@email.com",
        thoughts: [
          // {
          //   thoughtText: "thought 3",
          //   username: "Joe",
          // },
        ],
        friends: [],
      },
      {
        username: "Ann",
        email: "Ann@email.com",
        thoughts: [
          // {
          //   thoughtText: "thought 4",
          //   username: "Ann",
          // },
        ],
        friends: [],
      },
  ];

  try {
    const userSeed = await User.insertMany(users);
    console.log(userSeed);
    if(userSeed) {
        return userSeed
    }
  } catch (err) {
    console.log(err)
  }
}

seedDB();