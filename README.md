Media Capture and Storage Web Application
Welcome to the Media Capture and Storage Web Application! This project is a full-stack web application designed to facilitate user authentication, media uploads, and management. It serves as a platform for users to capture and store media files efficiently.

Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Environment Variables
Deployment
Contributing
Features
User authentication (signup, login, logout)
Email verification with OTP
Password reset functionality
Media upload and management (images and videos)
Google authentication
Technologies Used
Backend:

Node.js
Express.js
MongoDB (with Mongoose)
JWT (JSON Web Tokens) for authentication
Nodemailer for sending emails
Multer for handling file uploads
dotenv for environment variable management
Frontend:

React.js
Redux for state management
Axios for API requests
Installation
Clone the repository:


cd Backend
npm install
Install frontend dependencies:

cd client
npm install
Create a .env file in the Backend directory and add the following environment variables:

PORT=5000
NODE_ENV=development
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
Usage
Start the backend server:

cd Backend
npm run server
Start the frontend application:

cd client
npm run dev
The application will run on http://localhost:5137 for the frontend and http://localhost:5000 for the backend.

API Endpoints
Authentication
POST /api/auth/signup - Register a new user
POST /api/auth/login - Log in a user
POST /api/auth/logout - Log out a user
POST /api/auth/verify - Verify user account with OTP
POST /api/auth/forget-password - Request password reset
POST /api/auth/reset-password - Reset user password
POST /api/auth/google-auth - Google authentication
Media Management
POST /api/media/upload - Upload media files
GET /api/media - Get all media for the authenticated user
DELETE /api/media/:id - Delete a specific media file
Environment Variables
Make sure to set the following environment variables in your .env file in the Backend directory:

PORT: The port on which the server will run.
NODE_ENV: The environment mode (development/production).
MONGO_URL: MongoDB connection string.
JWT_SECRET: Secret key for signing JWT tokens.
JWT_EXPIRES_IN: Expiration time for JWT tokens.
JWT_COOKIE_EXPIRES_IN: Expiration time for JWT cookies.
EMAIL_USER: Email address for sending emails.
EMAIL_PASS: Password for the email account.
Deployment
Backend is deployed at Render: https://media-capture-and-storage-web.onrender.com
Frontend is deployed at Vercel: https://media-capture-and-storage-web-application-frontend-qa2y84773.vercel.app
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
