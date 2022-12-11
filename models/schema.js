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
        likes: Number,
       
    });
    
    const favouriteSchema = new mongoose.Schema({ 
        name:String,
        createdAt: Date,
        updatedAt: Date
    });
    

    const gallary = mongoose.model('gallary', gallerySchema);
    const image = mongoose.model('image', imageSchema);
    const favourite = mongoose.model('favourite', favouriteSchema)
    
    var my_schemas = {
       "gallary": gallary,
       "image": image,
       "favourite": favourite
    };
module.exports = my_schemas;