const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
  // GET to get a single thought by its _id
  // PUT to update a thought by its _id
  // DELETE to remove a thought by its _id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
  // POST to create a reaction stored in a single thought's reactions array field
  router.route('/:thoughtId/reactions').post(addReaction);
  // DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
