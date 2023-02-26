const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:newpassword@utacoding.l3ykbwu.mongodb.net/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
