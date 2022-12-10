const mongoose = require("mongoose");
const express = require('express')
const {Router} = require("express")
const schema = require("../models/schema");
const route = Router()

var gallarie = schema.gallary;

route.get("/", async (req,res)=>{
   
  const result =  await gallarie.find();
  console.log(result);
  res.send(result);
  res.send("you are now enter in discover route")

})



module.exports = route;