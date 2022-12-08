const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const app = express()

//configuration mongodb with localserver
const mongoUrl = "mongodb://localhost:27017/micro-project"
mongoose.set('strictQuery', false);
mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log("Database Not Connected Successfully : " + err);
    });



//check server is active or not
app.get("/api/health" ,(req,res) =>{
    res.send(`backend server is active status: active & time:${ new Date()}`)
})


app.get('/', (req, res) => {
    res.send("hello world")
})



//connection part
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`)
})