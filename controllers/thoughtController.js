const { Thought, User } = require('../models');

// Functions for handling thought routes
const thoughtController = {
	// Get all thoughts
	getThoughts(req, res) {
		Thought.find()
			.then((thoughts) => res.json(thoughts))
			.catch((err) => res.status(500).json(err));
	},

	// Get a single thought by _id
	getSingleThought(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with that ID' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},

	// Create a new thought
	createThought(req, res) {
		User.findOne({ username: req.body.username })
			.then((user) => {
				if (!user) {
					// If no user is found, return an error and stop
					return res
						.status(404)
						.json({ message: 'No user found with that username' });
				}

				// If the user exists, proceed to create the thought
				return Thought.create({
					thoughtText: req.body.thoughtText,
					username: req.body.username, // Associate the thought with the user
				})
					.then((thought) => {
						// After creating the thought, update the user's thought array
						return User.findOneAndUpdate(
							{ username: req.body.username },
							{ $push: { thoughts: thought._id } },
							{ new: true }
						);
					})
					.then(() => {
						res.json('Created the thought!');
					});
			})
			.catch((err) => res.status(500).json(err));
	},

	// Update a thought by _id
	updateThought(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ new: true }
		)
			.then((thought) => res.json(thought))
			.catch((err) => res.status(500).json(err));
	},

	// Delete a thought by _id
	deleteThought(req, res) {
		Thought.findOneAndRemove({ _id: req.params.thoughtId })
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with that ID' })
					: User.findOneAndUpdate(
							{ thoughts: req.params.thoughtId },
							{ $pull: { thoughts: req.params.thoughtId } },
							{ new: true }
					  )
			)
			.then((user) =>
				!user
					? res.status(404).json({
							message: 'Thought deleted but no user found',
					  })
					: res.json({ message: 'Thought successfully deleted' })
			)
			.catch((err) => res.status(500).json(err));
	},

	// Add a reaction
	addReaction(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $addToSet: { reactions: req.body } },
			{ new: true }
		)
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with this ID!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},

	// Remove a reaction
	removeReaction(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $pull: { reactions: { reactionId: req.params.reactionId } } },
			{ new: true }
		)
			.then((thought) =>
				!thought
					? res
							.status(404)
							.json({ message: 'No thought with this ID!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
};

module.exports = thoughtController;
