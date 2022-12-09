const express = require('express')
const mongoose = require("mongoose")
const connect = require("./config/db")
const admin = require("./routes/admin");

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const gallerySchema = new mongoose.Schema({ 
    name:{
        type: String,
        required: true
    },
    createdAt: Date,
    updatedAt: Date
});

const imageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    createdAt: Date,
    updatedAt: Date,
    category: [String],
    imageLink: {
        type: String,
        required: true
    },
    likes: Number
});

const gallary = mongoose.model('gallary', gallerySchema);
const image = mongoose.model('image', imageSchema);



app.use("/api/category", admin );
app.use("/api/category/newImage", admin);








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




