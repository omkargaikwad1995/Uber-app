const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true})
        .then(() => console.log('Connected to the Mongo database'))
        .catch(err => console.log(err));
}

module.exports = connectToDb;