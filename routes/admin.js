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



route.post("/:category", (req,res,next)=>{
     
    try{
      const imageName = req.body.name;
      const imageLink = req.body.imageLink;
      const category = req.params.category;

      const newImage = new image({
      name: imageName,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: category,
      imageLink: imageLink,
      likes: 0
     })
       res.send("you are inside admin")
       newImage.save();
       }catch(error) {
         next();
       }
    
})


module.exports = route;

