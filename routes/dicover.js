const mongoose = require("mongoose");
const express = require('express')
const {Router} = require("express")
const schema = require("../models/schema");
const route = Router()

var gallarie = schema.gallary;
var images = schema.image;

route.get("/", async (req,res,next)=>{
       try{
         const result =  await gallarie.find();
         console.log(result);
         res.send(result);
         res.send("you are now enter in discover route")
       }
       catch(error){
         next();
       }

})

route.get("/:category", async (req,res,next)=>{
          try{
           const categoryImage = req.params.category;
           const result =  await images.find({category: categoryImage}).limit(4);
           res.send(result);
          }
          catch(error){
           next();
          } 
  })
  
  

module.exports = route;