const express = require('express')
const mongoose = require("mongoose");
const {Router} = require("express");
const schema = require("../models/schema");
const route = Router()

var gallaries = schema.gallary;
var images = schema.image;
var fav = schema.favourite;

route.post("/:category", (req,res,next)=>{
     
    try{
      const imageName = req.body.name;
      const imageLink = req.body.imageLink;
      const category = req.params.category;

      const newImage = new images({
      name: imageName,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: category,
      imageLink: imageLink,
      likes: 0
     })
     
//add favourite image in seperate coolection favourite       
      if(req.query.favourite){
        var str = req.query.favourite.split()
        if(str[0] === 'true'){
          const favourites = new fav({
             name: imageName,
             createdAt: new Date(),
             updatedAt: new Date(),
          })
          favourites.save();
        } 
      }
      

      const categoryName = req.params.category;
      const gallaryCollection = new gallaries({
         name: categoryName,
         createdAt: new Date(),
         updatedAt: new Date(),
      })

       res.send("you are inside admin")
       newImage.save();
       gallaryCollection.save();
      

       }catch(error) {
         next();
       }
    
})


module.exports = route;

