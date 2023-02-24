const {Schema, model} = require('mongoose');
const reactionSchema = require('../models/Reaction');
const userSchema = require('../models/User');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 280, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //   * Use a getter method to format the timestamp on query
        get: (timestamp) => dateFormat(timestamp),
    }, 
    username: userSchema,
    // {
    //     type: String,
    //     required: true,
    // },
    //   * Array of nested documents created with the `reactionSchema`
    reactions: [reactionSchema],
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('reactionCount')
.get(function (){
    return this.thought.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;