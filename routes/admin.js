const mongoose = require("mongoose")
const {Router} = require("express")

const route = Router()

const gallerySchema = new mongoose.Schema({ 
    name:String,
    createdAt: Date,
    updatedAt: Date
});

const imageSchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date,
    category: [String],
    imageLink: String,
    likes: Number
});

const gallary = mongoose.model('gallary', gallerySchema);
const image = mongoose.model('image', imageSchema);



route.post("/", (req,res)=>{
     
    const imageName = req.body.name;
    const imageLink = req.body.imageLink;
    const category = req.body.category;

    const newImage = new image({
      name: imageName,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: category,
      imageLink: imageLink,
      likes: 0
    })
    
    newImage.save();

})

route.post("/newImage", (req,res)=>{
       
   const categoryName = req.body.name;

   const gallaryName = gallary({
      name: categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
   })
    
   gallaryName.save();
    
 })

// route.get("/:id", (req,res)=>{
//     const id  = req.params.id
//     res.send(id)
//  })

//  route.get("/:name", (req,res)=>{
//     const name  = req.params.id
//     res.send(name)
// })

module.exports = route;

