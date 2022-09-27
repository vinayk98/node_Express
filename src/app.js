const express = require('express')
const app = express()
const cors = require('cors');
const bcrypt = require('bcrypt');
const connectDB = require('./models/conn')

const port = process.env.PORT || 8800
connectDB();

var salt = bcrypt.genSaltSync(10);

//to generate a hash password

const Student = require('./models/studentmodel')

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors())
app.get('/', async (req, res) => {
    try {
        console.log("get the  data");
        res.status(200).json({message : "Hi welcome to homepage"})
    } catch (err) {
        console.log(err);
        res.status.send(err)
    }
})

app.get('/users', async (req, res) => {
    try {
        const allUsers = await Student.find();
        res.json({ users: allUsers })
    } catch (error) {
        console.log(error);
        res.status(400).send()
    }
})


app.post('/register', async (req, res) => {
    const userPassword = req.body.password
    var hash = bcrypt.hashSync(userPassword, salt)
    console.log(hash);
    try {
        const registerStudent = new Student({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            email: req.body.email,
            password: hash
        })
        let  createdStudent = await registerStudent.save()
        res.status(201).json({user : createdStudent})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

app.delete('/deleteUser/:id', async (req, res) => {

    try {
        const userID = req.params.id
        const deleteResult = await Student.findByIdAndDelete(userID);
        res.json({ message: "deleted" })
    } catch (error) {
        console.log(error);
    }
})


app.patch('/edituser/:id', async (req, res) => {

    try {
        let userID = req.params.id;
        console.log("this is the id ", userID);
        const edituser = await Student.findByIdAndUpdate(userID, req.body, { new: true });
        res.json({ updatedUser: edituser, message: "user is updated" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: { message: "not updated" } })
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
})
