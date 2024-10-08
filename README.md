<div align="center">
  
  # NoSQL Social Network API
  > Module 18 Challenge

![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393%3F?style=for-the-badge&logo=node.js&logoColor=green)](https://nodejs.org/en/)
[![Express Badge](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-5.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose Badge](https://img.shields.io/badge/Mongoose-6.x-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![dotenv Badge](https://img.shields.io/badge/dotenv-8.2.0-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white)](https://www.npmjs.com/package/dotenv)

</div>

## Description

This repository contains the code for the **NoSQL Social Network API** project. The API enables users to create accounts, share their thoughts, react to friends' thoughts, and add friends. This project leverages MongoDB, a NoSQL database, and Mongoose, an ODM (Object Data Modeling) library, to efficiently handle large amounts of unstructured data.

### Walkthrough Video:

[socialnetwork.webm](https://github.com/user-attachments/assets/1ad12545-f58e-4a4a-b2e5-a35fcd766ca8)

### Key Features:

-   **User Management**: Users can create, update, and delete their accounts.
-   **Thought Sharing**: Users can create, update, and delete thoughts.
-   **Reaction System**: Users can react to friends' thoughts and manage their own reactions.
-   **Friend List Management**: Users can add and remove friends from their friend list.
-   **NoSQL Database**: MongoDB allows for flexible and scalable data handling.

## Installation

To run this application, follow these steps:

1.  **Ensure Node.js is Installed:**

    You will need Node.js installed on your computer. Check if you have Node.js by typing `node -v` in your command line. You should see a version number. If Node.js is not installed, visit the [Node.js website](https://nodejs.org/en) to install it.

2.  **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/nosql-social-network-api.git
    cd nosql-social-network-api

    ```

3.  **Install Dependencies:**

    To install the necessary dependencies, run the following command:

    ```bash
    npm install

    ```

4.  **Set Up MongoDB:**

    Ensure that MongoDB is running on your machine or use a MongoDB Atlas connection. The application will automatically create the necessary collections.

5.  **Create a `.env` File:**

    Create a `.env` file in the root of the project and add the following environment variables:

        ```env
        MONGODB_URI=mongodb://localhost/social-network
        ```

    Replace `mongodb://localhost/social-network` with your MongoDB connection string.

6.  **Seed the Database:**

    To seed the database with sample data, run the following command:

    ```bash
    npm run seed

    ```

7.  **Start the Server:**

    To start the server, run the following command:

        ```bash
        npm start

    The server should start on `http://localhost:3001`.

## API Routes

Here are some of the available endpoints you can test using tools like Insomnia or Postman:

### Users

-   GET `/api/users`: Get all users.
-   \*GET `/api/users/:userId`: Get a single user by ID.
-   POST `/api/users`: Create a new user.
-   \*PUT `/api/users/:userId`: Update a user by ID.
-   DELETE `/api/users/:userId`: Delete a user and their associated thoughts

### Thoughts

-   GET `/api/thoughts`: Get all thoughts.
-   \*GET `/api/thoughts/:thoughtId`: Get a single thought by ID.
-   POST `/api/thoughts`: Create a new thought.
-   \*PUT `/api/thoughts/:thoughtId`: Update a thought by ID.
-   DELETE `/api/thoughts/:thoughtId`: Delete a thought.

### Reactions

-   POST `/api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
-   DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

### Friends

-   POST `/api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
-   DELETE `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Usage

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web framework for Node.js.
-   **MongoDB**: NoSQL database for handling large amounts of unstructured data.
-   **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
-   **dotenv**: Environment variable management.
-   **Insomnia/Postman**: Tools for testing API endpoints.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contact

-   GitHub: [leontran44](https://github.com/leontran44)
-   Email: [Leon Tran](mailto:leontran44@gmail.com)
-   LinkedIn: [Leon Tran](https://www.linkedin.com/in/hoangqtran/)
