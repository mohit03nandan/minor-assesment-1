const mongoose = require("mongoose");
const express = require('express')
const {Router} = require("express")
const schema = require("../models/schema");
const route = Router()

var gallarie = schema.gallary;
var images = schema.image;


route.get("/like/:imageId", async(req,res,next)=>{
  try{
    
    const imageId = req.params.imageId;
    if (!imageId) {
      res.status(400).send("Bad Request");
    }
     
    let likeValue;
     
    const result =  await images.findOne({ _id: imageId });    
    

    if (result) {
      if (result.likes) {
        likeValue = 0;
      } else {
        likeValue = 1;
      }
    }

    await images.updateOne(
      { _id: imageId },
      { $set: { likes: likeValue } }
    );


      res.send("Favorite updated successfully");

     } 
     catch(error){
       next()
     }    

})

// //sort by date in ascending or descending order also filtring
// route.get("/:category/:shuffle", async (req,res,next)=>{
//       const categoryImage = req.params.category;
//       const shuffle = req.params.shuffle;
//       console.log(shuffle)
//       let skip = parseInt(shuffle) || 0;
//       console.log(skip)
//       try{   
//              if(req.query.sortBy){ 
//                 const str = req.query.sortBy.split(':')  

//                 if(str[1] === 'desc'){
//                   //?sortBy=createdBy:desc
//                   const result =  await images.find({category: categoryImage}).limit(4).sort({createdAt:-1});
//                   res.send(result);
//                 }

//                 else if(str[1] === 'asc'){
//                   //?sortBy=createdBy:asc
//                   const result =  await images.find({category: categoryImage}).limit(4).sort({createdAt:1});
//                   res.send(result);
//                 }
                

//               }  

//               else if(req.query.filterByLike){
//                      //?filterByLike=true
//                      var str = req.query.filterByLike.split()  
//                      if(str[0] === 'true'){                             
//                           let filter = {};
//                           filter = { likes: 1 };
//                           const result =  await images.find({ category: { $in: [categoryImage] },...filter}).sort({createdAt:1}).limit(4)
//                           res.send(result);
//                  }
//               }
              
//               else if(shuffle){
//                 const result =  await images.find({ category: { $in: [categoryImage] }}).sort({createdAt:1}).skip(skip).limit(4)
//                 res.send(result);
//               }

             
                  
//            else{
//                 const result =  await images.find({category: categoryImage}).limit(4);
//                 res.send(result); 
//             }
              
          
//     }catch(error){
//         next();
//        }      

//   })




route.get("/:category/:shuffle", async (req, res, next) => {
  try {
      const category = req.params.category;
      const shuffle = req.params.shuffle;
      const sortByDate = req.query.sortByDate;
      const filterByLike = req.query.filterByLike;

      if (!category) {
          res.status(400).send("Bad Request");
      }

      let sort = 1;
      let skip = parseInt(shuffle) || 0;

      if (sortByDate) {
          if (sortByDate == "asc") {
              sort = 1;
          } else if (sortByDate == "desc") {
              sort = -1;
          }
      }

      let filter = {};
      if (filterByLike) {
          filter = { likes: 1 };
      }

      const result = await images.find({
          category: { $in: [category] },
          ...filter,
      })
          .sort({ createdAt: sort })
          .skip(skip)
          .limit(4);

      res.json(result);
  } catch (error) {
      console.log(error);
      next(error);
  }
});
  

module.exports = route;


