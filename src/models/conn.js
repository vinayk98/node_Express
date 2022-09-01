const mongoose = require('mongoose');
const db = `mongodb+srv://admin:admin@cluster0.v0okkzn.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('Mongo DB Connected');
    } catch (error) {
        console.log(`error`, error)
    }
}
module.exports = connectDB;