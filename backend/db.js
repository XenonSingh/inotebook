const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/";

const connectToMongoose = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connecting to Mongoose");
    });
};
module.exports = connectToMongoose;