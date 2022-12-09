const express = require('express')
const mongoose = require("./config/db")
const app = express();

const gallerySchema = new mongoose.Schema({
    _id: Number,
    name: String,
    createdAt: Date,
    updatedAt: Date
});

const imageSchema = new mongoose.Schema({
    name: String,
    _id: Number,
    createdAt: Date,
    updatedAt: Date,
    category: [String],
    imageLink: String,
    likes: Boolean
});

const gallary = mongoose.model('gallary', gallerySchema);
const image = mongoose.model('image', imageSchema);








//check server is active or not
app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})

app.get('/', (req, res) => {
    res.send("hello world")
})


//connection part
const port = process.env.PORT 
const host = process.env.HOST 
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})




