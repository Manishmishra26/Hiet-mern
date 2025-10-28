const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const PORT = 3000;
const app = express();

const Doctor = require('./Model/doctor')
const Patient = require('./Model/patient')



const dbUrl = process.env.MONGODB_URL

mongoose.connect(dbUrl)
.then(()=>{
    console.log("Successfully connected");
    app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:${PORT}');
})
})
.catch((e)=>{
    console.log("Error",e);
})

app.use(express.json());

app.get('/',(req , res)=>{
    res.get('Hospital')
})

app.use('/', require('./doctors'))
app.use('/patients', require('./patients'))
