# WebAppDev-255BajaBlast
BajaBlast Group Project Repository

# Course Management System - Database
This database schema designed to manage students, teachers, courses, subjects, and enrollments in an educational institution. The schema ensures each course is associated with only one teacher and one subject, while allowing students to select and enroll in courses.

## Table of Contents
- [Features](#features)
- [Schema Overview](#schema-overview)
- [Database Design Considerations](#database-design-considerations)


## Features
Student Management: Track student details including email, phone number, and date of birth.

Teacher Management: Store teacher details and assign teachers to courses.

Course Management: Create and manage courses, each with a specific teacher and subject.

Subject Management: Define subject areas, and associate them with courses.

Course Selection and Enrollment: Track student course selections and enrollments.

## Schema Overview
_1. Student_
* idStudent (Primary Key): Unique identifier for each student.
* emailStudent: Unique email address for communication.
* phoneStudent: Contact number.
* birthStudent: Date of birth.

_2. Teacher_
* idTeacher (Primary Key): Unique identifier for each teacher.
* emailTeacher: Unique email address for communication.
* phoneTeacher: Contact number.
* birthTeacher: Date of birth.

_3. Course_
* idCourse (Primary Key): Unique identifier for each course.
* nameCourse: Name of the course.
* descriptionCourse: Detailed description of the course.
* numberCredit: Number of credits.
* startDate: Course start date.
* endDate: Course end date.
* idTeacher (Foreign Key): The teacher responsible for the course.
* idSubject (Foreign Key): The subject area of the course.

_4. Subject_
* idSubject (Primary Key): Unique identifier for each subject area.
* subjectArea: Name of the subject area (e.g., Mathematics, Science).

_5. Course Selected_
* idStudent (Primary Key): Unique identifier for the student.
* idCourse (Primary Key): Unique identifier for the selected course.
* dateSelected: The date when the student selected the course.

_6. Enrollment_
* idStudent (Primary Key): Unique identifier for the student.
* idCourse (Primary Key): Unique identifier for the enrolled course.
* dateEnroll: The date when the student enrolled in the course.

## Database Design Considerations
_One-to-Many Relationships:_
* Each course is associated with only one teacher and one subject.
* A teacher can manage multiple courses, but each course is managed by only one teacher.
* A subject can cover multiple courses, but each course belongs to one subject.
  
_Student Enrollment:_
* A student can select or enroll in multiple courses.
* The schema keeps track of when a student selects a course and later when they officially enroll in it.
