const express = require('express')
const mongoose = require("./config/db")
const app = express();


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




