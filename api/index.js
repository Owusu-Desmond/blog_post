const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10)

const app = express()
const jwtSecretKey = process.env.JWT_SECRET_KEY

app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json())
app.use(cookieParser())

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
}

connectDB();

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({
        username, 
        password: bcrypt.hashSync(password, salt) // hash password
    })
    try {
        await newUser.save()
    } catch (err) {
        return res.status(400).json({message: err.message})
    }
    res.json(newUser)
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username})
        const isPasswordOk = bcrypt.compareSync(password, user.password) // compare password with hash

        if (isPasswordOk) {
            // login user
            jwt.sign({username, id: user._id}, jwtSecretKey, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json('ok')
            })
        } else {
            res.status(400).json({message: "Invalid credentials"})
        }
    } catch (err) {
        return res.status(400).json({message: err.message})
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecretKey, (err, info) => {
        if (err) throw err
        res.json(info)
    } )
})

app.listen(process.env.PORT || 8081, () => {
    console.log("App running on port 8081");
})