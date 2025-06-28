const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    Product: {
        type: String,
        required: true,
        minlength: [3, 'Book name must be at least 3 characters long']
    },                                          
    Detail:{
        type: String,
       
        minlength: [5, 'Detail must be at least 5 characters long']

    },
    Available:{
        type:String,
        required: true,
    },
    ProductImage: {
        url: {
            type: String,
            
        },
        public_id: {
        type: String,
        
        }
    }
})
 const Library = mongoose.model('Library', librarySchema);
 module.exports = Library;
