const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'bajablast1.bajablast.oraclevcn.com',    
    user: 'santanaaffaires01@gmail.com',         
    password: 'Ivytech2024#',  
    database: 'bajablast' ,
    port:3306 
});

// SQL schema as a single string (or you can break it up)
const createTablesSQL = `
    -- Table: Student
    CREATE TABLE IF NOT EXISTS Student (
        idStudent INT PRIMARY KEY AUTO_INCREMENT,
        emailStudent VARCHAR(100) NOT NULL UNIQUE,
        phoneStudent VARCHAR(15),
        birthStudent DATE
    );

    -- Table: Teacher
    CREATE TABLE IF NOT EXISTS Teacher (
        idTeacher INT PRIMARY KEY AUTO_INCREMENT,
        emailTeacher VARCHAR(100) NOT NULL UNIQUE,
        phoneTeacher VARCHAR(15),
        birthTeacher DATE
    );

    -- Table: Subject
    CREATE TABLE IF NOT EXISTS Subject (
        idSubject INT PRIMARY KEY AUTO_INCREMENT,
        subjectArea VARCHAR(100) NOT NULL
    );

    -- Table: Course
    CREATE TABLE IF NOT EXISTS Course (
        idCourse INT PRIMARY KEY AUTO_INCREMENT,
        nameCourse VARCHAR(100) NOT NULL,
        descriptionCourse TEXT,
        numberCredit INT,
        startDate DATE,
        endDate DATE,
        idTeacher INT,
        idSubject INT,
        FOREIGN KEY (idTeacher) REFERENCES Teacher(idTeacher),
        FOREIGN KEY (idSubject) REFERENCES Subject(idSubject)
    );

    -- Table: CourseSelected
    CREATE TABLE IF NOT EXISTS CourseSelected (
        idStudent INT,
        idCourse INT,
        dateSelected DATE,
        PRIMARY KEY (idStudent, idCourse),
        FOREIGN KEY (idStudent) REFERENCES Student(idStudent),
        FOREIGN KEY (idCourse) REFERENCES Course(idCourse)
    );

    -- Table: Enrollment
    CREATE TABLE IF NOT EXISTS Enrollment (
        idStudent INT,
        idCourse INT,
        dateEnroll DATE,
        PRIMARY KEY (idStudent, idCourse),
        FOREIGN KEY (idStudent) REFERENCES Student(idStudent),
        FOREIGN KEY (idCourse) REFERENCES Course(idCourse)
    );
`;

// Connect to the database and execute the SQL schema
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');

    // Execute the SQL schema to create tables
    connection.query(createTablesSQL, (error, results) => {
        if (error) {
            console.error('Error creating tables:', error.stack);
            return;
        }
        console.log('Tables created successfully!');
    });

    // Close the connection after creating tables
    connection.end();
});

