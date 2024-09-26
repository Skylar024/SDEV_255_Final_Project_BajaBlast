const express = require('express')
const morgan = require('morgan')

//Creates an express app
const BBApp = express()
//Register EJS as the view engine
BBApp.set('view engine', 'ejs');
//Listen for Requests, Useful for troubleshooting
BBApp.listen(3000);
//Setting up middleware and Static Files
BBApp.use(express.static('public'));
BBApp.use(morgan('dev'));


BBApp.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

BBApp.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
});

BBApp.get('/student', (req, res) => {
    res.render('student', {title: 'Student Page'});
});

BBApp.get('/teacher', (req, res) => {
    res.render('teacher', {title: 'Teacher Page'});
});

BBApp.get('/courses', (req, res) => {
    let courseList = [
        {title: 'SDEV255', snippet: 'Teacher: Mr.Smith', snippet2: 'Subject Area: Computer Science', snippet3: 'Credits: 3'},
        {title: 'COMM102', snippet: 'Teacher: Mrs.Blane', snippet2: 'Subject Area: Communications', snippet3: 'Credits: 3'},
        {title: 'SVAD150', snippet: 'Teacher: Mr.Rodgers', snippet2: 'Subject Area: Computer Science', snippet3: 'Credits: 3'},
        ];

        res.render('courses', {title: 'Courses', courseList})
});

