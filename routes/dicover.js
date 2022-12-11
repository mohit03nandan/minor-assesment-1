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
           
           else if(req.query.suffled){
                 //category?suffled=true
<<<<<<< HEAD
                   var str = req.query.suffled.split()
                    if(str[0] === 'true'){
                    var result =  await images.find({category: categoryImage});                
                          var i = 0
                          var final = result.slice(i,i+4); 
                          res.send(final)
                          i = i + 4;  
                      }  
                }  
=======
                   const str = req.query.suffled.split()
                    if(str[0] === 'true'){
                    const result =  await images.find({category: categoryImage});   
                    for (let i =  4 ;  i < result.length; i+4) { 
                        const final = result.slice(i,i+4); 
                        res.send(final)
                         break;  
                    } 
                 }    
             }
>>>>>>> 208f9ff (added shuffle images api)
           else{
                const result =  await images.find({category: categoryImage}).limit(4);
                res.send(result); 
            }

    }catch(error){
        next();
       }      

  })


  

module.exports = route;