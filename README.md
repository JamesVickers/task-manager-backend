# Task Manager Backend

## Description

The backend REST API for a task management web application, to be used with the corresponding [task-manager-frontend](https://github.com/JamesVickers/task-manager-frontend).

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB (via Mongoose)](https://mongoosejs.com/)
- [Prettier (for code formatting)](https://prettier.io/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/) (Version v20.10.0 or later).

- **npm**: npm (Node Package Manager) comes bundled with Node.js.

- **Git**: Git is required for version control. Install it from [git-scm.com](https://git-scm.com/downloads).

- **MongoDB**: [MongoDB](https://www.mongodb.com/docs/manual/installation/) installed locally, ideally with [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install/) for data visualisation.

## Setup and run the project locally

Follow these steps to get the project up and running on your local machine:

1. Clone the repository: 
    ```bash
    git clone https://github.com/JamesVickers/task-manager-backend.git
2. Install dependencies: 
    ```bash
    npm install
3. Start a local MongoDB instance:
    ```bash
    brew services start mongodb-community
4. (OPTIONAL) Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define environment variables (e.g., `PORT`, `MONGODB_URI`, etc.) as specified in the `.env.example` file.
   - Note: there are hardcoded fallbacks in place as this is none Production code and for ease of setup.
5. Start the server:
   - For development: 
   ```bash
   npm run dev`
6. REMEMBER: once you have finished development, stop the local MongoDB instance with the following command:
    ```bash
    brew services stop mongodb-community

## Available Scripts

- `npm run build`: Transpile TypeScript files to JavaScript.
- `npm start`: Start the server in production mode.
- `npm run dev`: Start the server in development mode with auto-reload using `nodemon`.
- `npm test`: Run tests (currently not implemented).

## License

This project is licensed under the ISC License.

For more details, refer to [LICENSE](LICENSE).
