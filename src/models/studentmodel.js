const mongoose = require('mongoose')
// #hello
const StudentSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },

    lastname : {
        type : String,
        required : true
    },
    mobile:{
        type :  Number,
        required : true,
        unique : true
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    password :{
        type :String,
        required : true,
   
    }
    
})

//so our collection is now created
const Student = mongoose.model(`vinay_nodeExpress`, StudentSchema)
module.exports= Student;