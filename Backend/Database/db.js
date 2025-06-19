const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.DB_CONNECT, 
    ).then(() => {
        console.log('Database connected successfully'); 
    }).catch(err => {
        console.log('Database connection error:', err);
    });
} 

module.exports = connectDB;