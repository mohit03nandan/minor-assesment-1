const express = require('express')
const connect = require("./config/db")
const admin = require("./routes/admin");

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/admin/category", admin );
app.use("/admin/category/newImage", admin);





//error handling
app.use((req,res,next)=>{    
     const err = new Error("Something went wrong! Please try after some time.");
     next(err);
})

app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Oops, something went wrong.")
 });
 


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




