const express = require('express')
const mongoose = require("mongoose")


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
    
    var my_schemas = {
       "gallary": gallary,
       "image": image
    };
module.exports = my_schemas;