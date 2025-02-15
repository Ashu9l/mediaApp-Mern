# Media Capture and Storage Web Application

{0848E3EA-DDA0-4BE6-AA4E-03C6C63F9B26}.png

Screenshot 2025-02-15 090854.png



Welcome to the Media Capture and Storage Web Application! This project is a full-stack web application designed to facilitate user authentication, media uploads, and management.
It serves as a platform for users to capture and store media files efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- User authentication (signup, login, logout)
- Email verification with OTP
- Password reset functionality
- Media upload and management (images and videos)
- Google authentication

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT (JSON Web Tokens) for authentication
  - Nodemailer for sending emails
  - Multer for handling file uploads
  - dotenv for environment variable management

- **Frontend**:
  - React.js
  - Redux for state management
  - Axios for API requests

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Agrima440/Media-Capture-and-Storage-Web-Application.git
   ```

2. Install backend dependencies:
   ```bash
   cd Backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the `Backend` directory and add the following environment variables:
   ```plaintext
   PORT=5000
   NODE_ENV=development
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90
   EMAIL_USER=your_email@example.com or use "agrima.sharma@usedatatalk.ai"
   EMAIL_PASS=your_email_password or "sifx lyfi ndmm vgut"
   ```

## Usage

1. Start the backend server:
   ```bash
   cd Backend
   npm run server
   ```

2. Start the frontend application:
   ```bash
   cd client
   npm run dev
   ```

3. The application will run on `http://localhost:5137` for the frontend and `http://localhost:5000` for the backend.

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Log in a user
- **POST** `/api/auth/logout` - Log out a user
- **POST** `/api/auth/verify` - Verify user account with OTP
- **POST** `/api/auth/forget-password` - Request password reset
- **POST** `/api/auth/reset-password` - Reset user password
- **POST** `/api/auth/google-auth` - Google authentication

### Media Management

- **POST** `/api/media/upload` - Upload media files
- **GET** `/api/media` - Get all media for the authenticated user
- **DELETE** `/api/media/:id` - Delete a specific media file

## Environment Variables

Make sure to set the following environment variables in your `.env` file in the `Backend` directory:

- `PORT`: The port on which the server will run.
- `NODE_ENV`: The environment mode (development/production).
- `MONGO_URL`: MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `JWT_EXPIRES_IN`: Expiration time for JWT tokens.
- `JWT_COOKIE_EXPIRES_IN`: Expiration time for JWT cookies.
- `EMAIL_USER`: Email address for sending emails.
- `EMAIL_PASS`: Password for the email account.

## Deployment

- **Backend** is deployed at Render: [https://media-capture-and-storage-web.onrender.com](https://media-capture-and-storage-web.onrender.com)
- **Frontend** is deployed at Vercel: [https://media-capture-and-storage-web-application-frontend-qa2y84773.vercel.app](https://media-capture-and-storage-web-application-frontend-qa2y84773.vercel.app)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

