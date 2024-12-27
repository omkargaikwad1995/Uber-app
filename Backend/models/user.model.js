const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast three character']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be atleast three character']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at 5 caharters long']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    // select: false is used to hide the password from the response like bydefault it will not show the password
    socketId:{
        type: String
    }
});

// Fixed typo in method name from generateauthToken to generateAuthToken
// Fixed _this to this
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;