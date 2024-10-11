# Baja Blast Courses

**Baja Blast Courses** is the final project for the SDEV 255 course at IvyTech Community College. The project is developed in two stages:
- **Stage 1**: Teachers can create, view, edit, and delete courses. Initially, any teacher can manage any course, but later this is restricted to the course creator.
- **Stage 2**: Students can log in, browse, search for, enroll in, and drop courses. This stage focuses on implementing login functionality, course management, and schedule viewing for students.

The goal is to provide a practical learning experience in web development, covering both front-end and back-end technologies, as well as user authentication and authorization.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and signup for both students and teachers using JWT (JSON Web Tokens) and role-based access control.
- **Course Management**: Teachers can create, update, and delete courses, while students can enroll in, view, and drop courses.
- **Filtering Options**: Students can filter courses based on course name or teacher.
- **Responsive Design**: Mobile-friendly interface built using Bootstrap for consistent performance across devices.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: EJS (Embedded JavaScript), Bootstrap, HTML, CSS
- **Middleware**: Passport.js for authentication, method-override for handling PUT/DELETE requests, cookie-parser for session management
- **Logging**: Morgan for HTTP request logging
- **Security**: Bcrypt for password hashing, JWT for secure token management

## Installation

### Prerequisites

Ensure the following are installed:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation Steps

1. Clone the repository:
   git clone https://github.com/yourUsername/SDEV_255_Final_Project_BajaBlast.git

2. Navigate to the project directory:
  cd SDEV_255_Final_Project_BajaBlast

3. Install the dependencies:
     npm install
   
4. Set up the environment and MongooseDB:
    PORT=3000
    MONGO_URI=your_mongodb_uri
    SESSION_SECRET=your_secret_key

5. Start the application:
     nodemon BajaBlastApp

The application will be accessible at http://localhost:3000.

## Usage

- **Students**: Can log in, browse courses, enroll, and manage their enrolled courses.
- **Teachers**: Can log in, create, edit, and delete courses, and manage their course offerings.
- **Guests**: Can explore the homepage and access information about the platform through the "About Us" section.

## API Endpoints

### Public Routes
- `GET /`: Renders the homepage.
- `GET /login`: Shows the login form.
- `GET /signup`: Shows the signup form.
- `GET /about`: Displays information about the platform.

### Protected Routes (Authentication Required)
- `GET /courses`: Lists available courses with filtering options for students.
- `POST /api/courses/add`: Allows a student to enroll in a course.
- `POST /api/courses/drop`: Allows a student to drop a course.
- `GET /courses/:id`: Displays details of a specific course.
- `POST /courses`: Allows a teacher to create a new course.
- `PUT /courses/:id`: Allows the course creator to update the course.
- `DELETE /courses/:id`: Allows the course creator to delete the course.

## Project Structure

SDEV_255_Final_Project_BajaBlast/

│

├── public/             # Static files (CSS, JS, images)

├── routes/             # Application routes (authRoutes, courseRoutes)

├── views/              # EJS templates (index, login, signup, courses)

├── models/             # Mongoose models (User, Course)

├── controllers/        # Controllers for authentication and course handling

├── middleware/         # Middleware functions for authentication and user checks

├── app.js              # Main application file

├── package.json        # Project metadata and scripts

├── package-lock.json   # Dependency tree

└── README.md           # Project documentation



## Contact

For any questions or issues, please open an issue on GitHub or contact, please contact us: 

- Daniel Santana: [GitHub](https://github.com/Sandarg95)
- Liza Martin: [GitHub](https://github.com/liza-martin)
- Lorena Hendricks: [GitHub](https://github.com/LorenaHendricks)
- Skylar Thompson: [GitHub](https://github.com/Skylar024)
  
