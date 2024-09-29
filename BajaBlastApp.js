const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');  // Include method-override
const Course = require('./models/course');


// connect to mongodb
const dbURI = 'mongodb+srv://dsantana15:kezQJOjLKcCjJ0Mf@nodetest.pciif.mongodb.net/?retryWrites=true&w=majority&appName=NodeTest'
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then((result) => BBApp.listen(3000))  // Start server after DB connection
  .catch((err) => console.log(err));

// express app
const BBApp = express();
BBApp.set('view engine', 'ejs');
BBApp.use(express.static('public'));
BBApp.use(express.urlencoded({ extended: true }));
BBApp.use(morgan('dev'));
// BBApp.use(methodOverride('_method'));  // Use method-override


// Routes
BBApp.get('/', (req, res) => res.render('index', {title: 'Home'}));
BBApp.get('/about', (req, res) => res.render('about', {title: 'About Us'}));
BBApp.get('/student', (req, res) => res.render('student', {title: 'Student Page'}));
BBApp.get('/create', (req, res) => res.render('create', {title: 'Add course Page'}));
BBApp.get('/teacher', (req, res) => res.render('teacher', {title: 'Teacher Page'}));

// List all courses
BBApp.get('/courses', (req, res) => {
  Course.find().sort({ createdAt: -1 })
    .then(result => res.render('courses', { title: 'All courses', courses: result }))
    .catch(err => console.log(err));
});

// Add a new course
BBApp.post('/courses', (req, res) => {
  const course = new Course(req.body);
  course.save()
    .then(result => res.redirect('/courses'))
    .catch(err => console.log(err));
});

// Show details of a course
BBApp.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  Course.findById(id)
    .then(result => res.render('details', { course: result, title: 'Course details' }))
    .catch(err => console.log(err));
});

// Delete a course
BBApp.delete('/courses/:id', (req, res) => {
  const id = req.params.id;
  Course.findByIdAndDelete(id)
    .then(result => res.json({ redirect: '/courses' }))
    .catch(err => console.log(err));
});

// GET: Show the form to edit the course
BBApp.get('/courses/:id/edit', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.render('edit', { course, title: 'Edit Course' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// PUT: Update the course data
BBApp.put('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.redirect(`/courses/${course._id}`);
  } catch (err) {
    if (err.name === 'ValidationError') {
      console.log('Validation Error:', err.message);
      // Re-render the form with the course data and error message
      const course = await Course.findById(req.params.id);  // Refetch course data
      return res.render('edit', { course, title: 'Edit Course', errorMessage: err.message });
    }
    res.status(500).send('Server Error');
  }
});

