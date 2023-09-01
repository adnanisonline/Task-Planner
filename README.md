# Task Planner App

Welcome to the Task Planner App! This application is designed to help you manage your tasks effectively. It includes features like task creation, updating, and deletion, user authentication using Passport and JWT, form handling with Formik and validation with Yup, loading indicators, toasts for notifications, pagination, and a responsive design. Additionally, the project is Dockerized for easy deployment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Option 1: Local Development](#option-1-local-development)
  - [Option 2: Dockerized Development](#option-2-dockerized-development)
- [Usage](#usage)
- [Features](#features)
- [Api Documentation](#api-documentation)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database
- [Docker](https://www.docker.com/) (optional, for Dockerized development)

## Technologies Used

- React (Client)
- Node.js (Server)
- Express.js (Server)
- MongoDB Atlas (Database)
- Passport.js (Authentication)
- JWT (JSON Web Tokens)
- Formik (Form Handling)
- Yup (Form Validation)
- Docker (Containerization)

## Getting Started

Choose one of the following options to set up the Task Planner App:

### Option 1: Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-planner-app.git
   ```

2. Navigate to the `client` directory:

   ```bash
   cd client
   ```

3. Install client dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `client` directory and configure the following environment variables:

   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

5. Navigate to the `server` directory:

   ```bash
   cd ../server
   ```

6. Install server dependencies:

   ```bash
   npm install
   ```

7. Create a `.env` file in the `server` directory and configure the following environment variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

8. Start the client and server:

   Client (from the `client` directory):

     ```bash
     npm start
     ```

   Server (from the `server` directory):

     ```bash
     npm start
     ```

### Option 2: Dockerized Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-planner-app.git
   ```

2. Navigate to the project root directory:

   ```bash
   cd task-planner-app
   ```

3. Create a `.env` file in both the `client` and `server` directories, and configure the following environment variables in each:

   **Client `.env` (inside the `client` directory):**

   ```
   REACT_APP_API_URL=http://server:5000
   ```

   **Server `.env` (inside the `server` directory):**

   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Build and start the Docker containers:

   ```bash
   docker-compose up
   ```

## Usage

Once the app is set up, you can access it in your web browser. The application should be available at `http://localhost:3000` for local development or at the appropriate URL for your Dockerized environment.


## Key Features

### Task Management (CRUD Operations)

- **Create Tasks**: Easily create new tasks to keep track of your work.

- **Read Tasks**: View your tasks with filtering and sorting options.

- **Update Tasks**: Edit and update task details as needed.

- **Delete Tasks**: Remove tasks that are no longer relevant.

### User Authentication

- **User Authentication**: Securely log in and manage your tasks with user authentication.

- **Passport and JWT**: Utilizes Passport.js and JWT for robust user authentication.

### Form Handling and Validation

- **Form Handling**: Seamlessly handle forms for task creation and editing.

- **Validation**: Ensure data accuracy with form validation powered by Yup.

### User-Friendly Features

- **Loading Indicators**: Provides feedback to users during data loading processes.

- **Toast Notifications**: Instantly receive important notifications and feedback.

- **Pagination**: Navigate through task lists efficiently with front-end pagination.

- **Search**: Quickly find specific tasks using a search feature.

- **Responsive Design**: Enjoy a seamless experience across various devices.


## API Documentation

This application's API is built using Node.js and Express, providing endpoints for managing tasks efficiently. The structure of the backend directory is organized as follows:

- `app.js`: The entry point of the backend application.

- `routes/`: Defines routes and handlers for the following:

  - `auth.js`: Manages routes and operations related to authentication.
  
  - `tasks.js`: Handles routes and operations for tasks.

- `controllers/`: Contains controller functions for:

  - `auth.js`: Logic for authentication operations.
  
  - `tasks.js`: Logic for task-related operations.

- `models/`: Defines schemas for interacting with the MongoDB database:

  - `Task.js`: Schema for tasks.
  
  - `User.js`: Schema for users.

- `middleware/`: Middleware functions are organized as follows:

  - `validation/`:
    - `authValidation.js`: Middleware for validating authentication-related requests.
    - `taskValidation.js`: Middleware for validating task-related requests.
    - `validatorResult.js`: Middleware to check validation results.
  
  - `isLogin.js`: Middleware for authenticating users.
  
  - `isOwner.js`: Middleware for authenticating users.
  
  - `errorHandler.js`: Middleware to gracefully handle errors.

- `config/`: Contains configurations for the database and passport.
