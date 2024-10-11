const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

//Creates the 'template' or Schema for a User 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Error: Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Error: Please enter a valide email'],
    },
    password: {
        type: String,
        required: [true, 'Error: Please enter an password'],
        minlength: [6, 'Error: Minimum password length is 6 characters'],

    },
    role: {
        type: String,
        lowercase: true,
    },
    courses: {
        type: Array,

    }
    
});

//Runs a function after doc is saved to Database
userSchema.post('save', function(doc, next) {
    //console.log('New User was created and saved', doc);
    next();
});
//Runs a function before doc is saved to Database
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(); //Generates the 'salt' to be added to hashed password
    this.password = await bcrypt.hash(this.password, salt); //this.password refers to the password the user enters BEFORE it is hash encrypted
    next();
});

//Static method for logging in User
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password); //Checks to see if the user entered password (password) matches the password for the user that is saved into the Database (user.password)
        if (auth) { //if authentication passes, return the user
            return user;
        }
        throw Error('Incorrect Password');
    }
    throw Error('Incorrect Email');
}

const User = mongoose.model('user', userSchema);

module.exports = User; 
