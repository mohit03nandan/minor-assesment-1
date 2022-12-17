const express = require('express')
const mongoose = require("mongoose");
const {Router} = require("express");
const schema = require("../models/schema");
const route = Router()

var gallaries = schema.gallary;
var images = schema.image;

route.post("/add-category/:category", async (req,res,next)=>{
     
    try{
      const categoryName = req.params.category;
     
      if (!categoryName) {
        res.status(400).send("Bad Request");
       }


      const gallaryCollection = new gallaries({
         name: categoryName,
         createdAt: new Date(),
         updatedAt: new Date(),
      })
       
      console.log(gallaryCollection)
         
     await gallaryCollection.save();
       res.send("Category created successfully!")
       

       }catch(error) {
         next();
       }
    
})


route.post("/add-image", async (req, res, next) => {
try{


      const imageName = req.body.name;
      const imageLink = req.body.imageLink;
      const category = req.body.category;

     if (!imageName || !category.length || !imageLink) {
      res.status(400).send("Bad Request");
     }

       
     const newImage = new images({
      name: imageName,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: category,
      imageLink: imageLink,
      
     })
     
 

   newImage.save();
   res.send("Image added successfully!");
  }catch(error){
    next();
   }
  
});


module.exports = route;

