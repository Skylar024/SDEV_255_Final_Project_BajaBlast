//// NOT USING IN THIS PROJECT





const createTablesSQL = `
    -- Table: Student
    CREATE TABLE IF NOT EXISTS Student (
        idStudent INTEGER PRIMARY KEY AUTOINCREMENT,
        emailStudent VARCHAR(100) NOT NULL UNIQUE,
        phoneStudent VARCHAR(15),
        birthStudent DATE
    );

    -- Table: Teacher
    CREATE TABLE IF NOT EXISTS Teacher (
        idTeacher INTEGER PRIMARY KEY AUTOINCREMENT,
        emailTeacher VARCHAR(100) NOT NULL UNIQUE,
        phoneTeacher VARCHAR(15),
        birthTeacher DATE
    );

    -- Table: Subject
    CREATE TABLE IF NOT EXISTS Subject (
        idSubject INTEGER PRIMARY KEY AUTOINCREMENT,
        subjectArea VARCHAR(100) NOT NULL
    );

    -- Table: Course
    CREATE TABLE IF NOT EXISTS Course (
        idCourse INTEGER PRIMARY KEY AUTOINCREMENT,
        nameCourse VARCHAR(100) NOT NULL,
        descriptionCourse TEXT,
        numberCredit INTEGER,
        startDate DATE,
        endDate DATE,
        idTeacher INTEGER,
        idSubject INTEGER,
        FOREIGN KEY (idTeacher) REFERENCES Teacher(idTeacher),
        FOREIGN KEY (idSubject) REFERENCES Subject(idSubject)
    );

    -- Table: enrolledStudent
    CREATE TABLE IF NOT EXISTS enrolledStudent (
    idStudent INTEGER,
    idCourse INTEGER,
    dateSelected DATE,
    isEnrolled BOOLEAN,
    PRIMARY KEY (idStudent, idCourse),
    FOREIGN KEY (idStudent) REFERENCES Student(idStudent),
    FOREIGN KEY (idCourse) REFERENCES Course(idCourse)
);

`;

/*// Connect to SQLite database and execute the SQL schema
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('test_management1.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the SQLite database.');

    // Execute the SQL schema to create tables
    db.exec(createTablesSQL, (error) => {
        if (error) {
            console.error('Error creating tables:', error.message);
            return;
        }
        console.log('Tables created successfully!');
    });
// })*/

    

/* &&&&&&&&&&&&& FOR TEST PURPOSE &&&&&&&&&&&&&&&&&&&&&&&&&&&


    // Insert a new student
    const studentSQL = `INSERT INTO Student (emailStudent, phoneStudent, birthStudent) VALUES (?, ?, ?)`;
    db.run(studentSQL, ['john.doe@example.com', '123-456-7890', '1990-01-01'], function (err) {
        if (err) {
            console.error('Error inserting into Student:', err.message);
        } else {
            console.log(`Inserted student with ID ${this.lastID}`);
        }
    });

    // Insert a new teacher
    const teacherSQL = `INSERT INTO Teacher (emailTeacher, phoneTeacher, birthTeacher) VALUES (?, ?, ?)`;
    db.run(teacherSQL, ['jane.smith@example.com', '987-654-3210', '1985-05-15'], function (err) {
        if (err) {
            console.error('Error inserting into Teacher:', err.message);
        } else {
            console.log(`Inserted teacher with ID ${this.lastID}`);
        }
    });

    // Insert a new subject
    const subjectSQL = `INSERT INTO Subject (subjectArea) VALUES (?)`;
    db.run(subjectSQL, ['Mathematics'], function (err) {
        if (err) {
            console.error('Error inserting into Subject:', err.message);
        } else {
            console.log(`Inserted subject with ID ${this.lastID}`);
        }
    });

    // Insert a new course
    const courseSelectedSQL = `INSERT INTO Course (nameCourse, descriptionCourse, numberCredit, startDate, endDate, idTeacher, idSubject) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.run(courseSelectedSQL, ['Algebra 101', 'Introduction to Algebra', 3, '2024-01-10', '2024-06-10', 1, 1], function (err) {
        if (err) {
            console.error('Error inserting into Course:', err.message);
        } else {
            console.log(`Inserted course with ID ${this.lastID}`);
        }
    });

    // Selected course
    const courseSQL = `INSERT INTO CourseSelected (idStudent, idCourse, dateSelected, isEnrolled) VALUES (?, ?, ?, ?)`;
    db.run(courseSQL, [1, 1, '2024-01-10', 'true'], function (err) {
        if (err) {
            console.error('Error inserting into Course:', err.message);
        } else {
            console.log(`Inserted course with ID ${this.lastID}`);
        }
    });

    // Fetch and display data from the Student table
    db.all('SELECT * FROM Student', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from Student table:', err.message);
            return;
        }
        console.log('--- Students ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });

    // Fetch and display data from the Teacher table
    db.all('SELECT * FROM Teacher', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from Teacher table:', err.message);
            return;
        }
        console.log('--- Teachers ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });

    // Fetch and display data from the Subject table
    db.all('SELECT * FROM Subject', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from Subject table:', err.message);
            return;
        }
        console.log('--- Subjects ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });

    // Fetch and display data from the Course table
    db.all('SELECT * FROM Course', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from Course table:', err.message);
            return;
        }
        console.log('--- Courses ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });

    // Fetch and display data from the CourseSelected table
    db.all('SELECT * FROM CourseSelected', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from CourseSelected table:', err.message);
            return;
        }
        console.log('--- CourseSelected ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });

    // Close the database connection
    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
    });

});*/

/*------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
                                  FUNCTION CREATE TABLES                                                */

// Connect to SQLite database and execute the SQL schema
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('test_management11.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the SQLite database.');

    // Execute the SQL schema to create tables
    db.exec(createTablesSQL, (error) => {
        if (error) {
            console.error('Error creating tables:', error.message);
            return;
        }
        console.log('Tables created successfully!');
    });

    /*------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------    
                                  FUNCTION ADD                                                             */

    // Function to add a STUDENT
    function addStudent(emailStudent, phoneStudent, birthStudent) {
        
        const sql = `INSERT INTO Student (emailStudent, phoneStudent, birthStudent) VALUES (?, ?, ?)`;
    
        db.run(sql, [emailStudent, phoneStudent, birthStudent], function(err) {
            if (err) {
                console.error('Error adding student:', err.message);
            } else {
                console.log(`Student added successfully with ID ${this.lastID}`);
    
                
            }
        });
    }
    
    // Function to add a TEACHER
    function addTeacher(emailTeacher, phoneTeacher, birthTeacher) {
        const sql = `INSERT INTO Teacher (emailTeacher, phoneTeacher, birthTeacher) VALUES (?, ?, ?)`;
    
        db.run(sql, [emailTeacher, phoneTeacher, birthTeacher], function (err) {
            if (err) {
                console.error('Error adding teacher:', err.message);
            } else {
                console.log(`Teacher added successfully with ID ${this.lastID}`);
    
                
            }
        });
    }
    
    // Function to add a SUBJECT
    function addSubject(subjectArea) {
        const sql = `INSERT INTO Subject (subjectArea) VALUES (?)`;
    
        db.run(sql, [subjectArea], function (err) {
            if (err) {
                console.error('Error adding subject:', err.message);
            } else {
                console.log(`Subject added successfully with ID ${this.lastID}`);
    
                
            }
        });
    }
    
    // Function to add a COURSE
    function addCourse(nameCourse, descriptionCourse, numberCredit, startDate, endDate, idTeacher, idSubject) {
        const sql = `INSERT INTO Course (nameCourse, descriptionCourse, numberCredit, startDate, endDate, idTeacher, idSubject) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
        db.run(sql, [nameCourse, descriptionCourse, numberCredit, startDate, endDate, idTeacher, idSubject], function (err) {
            if (err) {
                console.error('Error adding course:', err.message);
            } else {
                console.log(`Course added successfully with ID ${this.lastID}`);
    
            }   
        });
    }
    
    // when a student selects a course, it will add the course to the "shopping cart" by inserting or updating the isEnrolled value as false.

    function addToCart(idStudent, idCourse, dateSelected) {
        const sql = `INSERT INTO enrolledStudent (idStudent, idCourse, dateSelected, isEnrolled)
                        VALUES (?, ?, ?, ?)
                        ON CONFLICT(idStudent, idCourse) 
                        DO UPDATE SET isEnrolled = false, dateSelected = ?`;
    
        db.run(sql, [idStudent, idCourse, dateSelected, false, dateSelected], function (err) {
            if (err) {
                console.error('Error adding course to shopping cart:', err.message);
            } else {
                console.log(`Course with ID ${idCourse} added to shopping cart for Student ID ${idStudent}.`);
            }
        });
    }
    
    // Example usage of the functions
    
    addStudent('john.doe@example.com', '123-456-7890', '1990-01-01');
    addTeacher('jane.doe@example.com', '987-654-3210', '1985-05-10');
    addSubject('Mathematics');
    addCourse('Algebra', 'Introduction to Algebra', 3, '2024-01-01', '2024-06-01', 1, 1);
    addCourse('Geometry', 'Introduction to Geometry', 3, '2024-01-01', '2024-06-01', 1, 1);
    addToCart(1, 1, '2024-02-01', 'true');
    addToCart(1, 2, '2024-02-01', 'true');
    addStudent('john.do5e@example.com', '123-456-7890', '1990-01-01');

    // Fetch and display data from the CourseSelected table
    db.all('SELECT * FROM enrolledStudent', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data from CourseSelected table:', err.message);
            return;
        }
        console.log('--- CourseSelected ---');
        rows.forEach((row) => {
            console.log(row);
        });
    });


    /*------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
                                  FUNCTION DELETE COURSES (by the teacher only)                           */

    function deleteCourseById(idCourse) {
        const sql = `DELETE FROM Course WHERE idCourse = ?`;

        db.run(sql, [idCourse], function (err) {
            if (err) {
                console.error('Error deleting course:', err.message);
            } else {
                if (this.changes > 0) {
                    console.log(`Course with ID ${idCourse} deleted successfully.`);
                } else {
                    console.log(`No course found with ID ${idCourse}.`);
                }
            }
        });
    }
    // Example usage of the functions
    deleteCourseById(1);

    /*------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------
                 FUNCTION DROP COURSES (likely delete an entry from the enrolledStudent table)               */
        
        function dropCourses(idStudent, idCourse) {
        const sql = `DELETE FROM enrolledStudent WHERE idStudent = ? AND idCourse = ?`;
    
        db.run(sql, [idStudent, idCourse], function (err) {
            if (err) {
                console.error('Error dropping class:', err.message);
            } else {
                if (this.changes > 0) {
                    console.log(`Student with ID ${idStudent} successfully dropped the class with Course ID ${idCourse}.`);
                } else {
                    console.log(`No enrollment found for Student ID ${idStudent} in Course ID ${idCourse}.`);
                }
            }
        });
    }
    // Example usage of the functions
    dropCourses(1, 2);

    /*--------------------------------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------------------------------
    FUNCTIONS SHOPPING CART TO ENROLLED COURSES & VICE-VERSA (when the student eill sellect a course, he'll add
                                                            it to shopping cart. if he wants to move it to enrolled 
                                                            courses, the boolean come true. if he wants to switch 
                                                            it again to shopping cart, the boolean change to false) */

    function moveToEnrolled(idStudent, idCourse) {
        const sql = `UPDATE enrolledStudent SET isEnrolled = true WHERE idStudent = ? AND idCourse = ?`;
    
        db.run(sql, [idStudent, idCourse], function (err) {
            if (err) {
                console.error('Error moving course to enrolled courses:', err.message);
            } else {
                if (this.changes > 0) {
                    console.log(`Course with ID ${idCourse} moved to enrolled courses for Student ID ${idStudent}.`);
                } else {
                    console.log(`No course found in the cart for Student ID ${idStudent} and Course ID ${idCourse}.`);
                }
            }
        });
    }


    function moveBackToCart(idStudent, idCourse) {
        const sql = `UPDATE enrolledStudent SET isEnrolled = false WHERE idStudent = ? AND idCourse = ?`;
    
        db.run(sql, [idStudent, idCourse], function (err) {
            if (err) {
                console.error('Error moving course back to shopping cart:', err.message);
            } else {
                if (this.changes > 0) {
                    console.log(`Course with ID ${idCourse} moved back to shopping cart for Student ID ${idStudent}.`);
                } else {
                    console.log(`No enrolled course found for Student ID ${idStudent} and Course ID ${idCourse}.`);
                }
            }
        });
    }
    
    // Example: Move course to enrolled courses
    moveToEnrolled(1, 2);

    // Example: Move course back to shopping cart
    moveBackToCart(1, 2);

    // Close the database connection
    db.close((err) => {
        if (err) {
            console.error('Error closing the database connection:', err.message);
        } else {
            console.log('Database connection closed.');
        }
    });

    
});
