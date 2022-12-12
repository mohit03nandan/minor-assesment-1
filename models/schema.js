const express = require('express')
const mongoose = require("mongoose")


    const gallerySchema = new mongoose.Schema({ 
      
            name: {
                type: String,
                required: true,
            },

            createdAt: Date,
            updatedAt: Date
            
    });

    
    const imageSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        category: { 
            type: Array, 
            required: true
         },
        likes: { 
            type: Number,
             default: 0 
            },
        imageLink: { 
            type: String, 
            required: true 
        },
        createdAt: Date,
        updatedAt: Date
       
    });
    
    const gallary = mongoose.model('gallary', gallerySchema);
    const image = mongoose.model('image', imageSchema);
    
    var my_schemas = {
       "gallary": gallary,
       "image": image,
    };

module.exports = my_schemas;