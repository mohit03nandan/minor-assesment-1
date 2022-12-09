const {Router} = require("express")

const route = Router()

route.get("/", (req,res)=>{
   res.send("we are in category of admin route here! ")
})

route.get("/newImage", (req,res)=>{
    res.send("we are in admin route here and there is newImage also! ")
 })

route.get("/:id", (req,res)=>{
    const id  = req.params.id
    res.send(id)
 })

 route.get("/:name", (req,res)=>{
    const name  = req.params.id
    res.send(name)
})

module.exports = route;

