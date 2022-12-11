const mongoose = require("mongoose");
const express = require('express')
const {Router} = require("express")
const schema = require("../models/schema");
const { ObjectID } = require("bson");
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

//filter by likes
route.get("/like", async(req,res,next)=>{
  try{
    const result =  await images.find({likes : 1});    
    res.send(result)
  } 
  catch(error){
    next()
  }    

})

//sort by date in ascending or descending order
route.get("/:category", async (req,res,next)=>{
      const categoryImage = req.params.category;
      try{   
             
             if(req.query.sortBy){ 
                const str = req.query.sortBy.split(':')  

                if(str[1] === 'desc'){
                  //?sortBy=createdBy:desc
                  const result =  await images.find({category: categoryImage}).limit(4).sort({createdAt:-1});
                  res.send(result);
                }

                else if(str[1] === 'asc'){
                  //?sortBy=createdBy:asc
                  const result =  await images.find({category: categoryImage}).limit(4).sort({createdAt:1});
                  res.send(result);
                }

            }  

            else{
                const result =  await images.find({category: categoryImage}).limit(4);
                res.send(result); 
            }

    }catch(error){
        next();
       }      

  })


  

module.exports = route;