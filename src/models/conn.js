const mongoose = require('mongoose');
const db = `mongodb+srv://admin1:admin1@vinay.urjkkri.mongodb.net/?retryWrites=true&w=majority`;


const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('Mongo DB Connected');
    } catch (error) {
        console.log(`error`, error)
    }
}
module.exports = connectDB;