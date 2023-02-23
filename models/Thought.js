const {Schema, Types} = require('mongoose');

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
    username: {
        type: String,
        required: true,
    },
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

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //   * Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
        }, 
    },
    {
        toJSON: {
          getters: true,
        },
      }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;