const users = [
	{
		username: 'lernantino',
		email: 'lernantino@gmail.com',
	},
	{
		username: 'amiko2020',
		email: 'amiko@gmail.com',
	},
	{
		username: 'john_doe',
		email: 'johndoe@gmail.com',
	},
	{
		username: 'jane_smith',
		email: 'janesmith@gmail.com',
	},
];

const thoughts = [
	{
		thoughtText: "Here's a cool thought...",
		username: 'lernantino',
	},
	{
		thoughtText: 'Thinking about MongoDB!',
		username: 'amiko2020',
	},
	{
		thoughtText: 'This is a random thought!',
		username: 'john_doe',
	},
	{
		thoughtText: 'Learning NoSQL is fun!',
		username: 'jane_smith',
	},
];

const reactions = [
	{
		reactionBody: 'Awesome thought!',
		username: 'amiko2020',
	},
	{
		reactionBody: 'Cool idea!',
		username: 'jane_smith',
	},
	{
		reactionBody: 'I agree with this!',
		username: 'john_doe',
	},
];

module.exports = { users, thoughts, reactions };
