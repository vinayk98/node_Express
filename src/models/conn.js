const mongoose = require('mongoose');
const db = `mongodb://127.0.0.1:27017/user`;


const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('Mongo DB Connected');
    } catch (error) {
        console.log(`error`, error)
    }
}
module.exports = connectDB;