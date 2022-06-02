const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');

const app = express()
app.use(cors());
app.use(express.json());
app.use('/', router)

const PORT = process.env.PORT || 5000;

const URI = "mongodb+srv://JagadeeshVadlamuri:wWKyCCso8Ma2htWg@cluster0.wf6fslw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI).then(()=>{
    try{
        app.listen(PORT, () => {
            console.log("Mongo is connected on"+" "+PORT)
        })
    } catch(err){
        console.log(err)
    } 
}) 

app.get('/', (req, res) => {
    res.send('Welcome to Census Data reports')
})