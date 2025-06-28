const libraryModel = require('../db/Models/library.model');
const createLibrary = require('../Createdb/librarydb');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { inventaryUpload } = require('../config/multer.config');
const cookieParser = require('cookie-parser');
router.use(cookieParser());




router.post('/inventary', authMiddleware.authenticateAdmin,inventaryUpload.single("image"), async (req, res) => {
 const { Product, Detail, Available, Adminkey} = await JSON.parse(req.body.Product);


  const imageUrl = req.file.path;
    const publicId = req.file.filename;
   

    if (Adminkey !== process.env.ADMIN_SECRET_Inventory ) {
        return res.status(403).json({ message: 'Invalid admin key' });
    }
    if (!Product || !Available) {
        return res.status(400).json({ message: 'Product and availability status are required' });
    }

    try {
        const existingProduct = await libraryModel.findOne({ Product });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product with this name already exists' });
        }


        const library = await createLibrary({ Product, Detail, Available,ProductImage:{url:imageUrl,public_id:publicId} });
        if (!library) {
            return res.status(500).json({ message: 'Error creating library item' });
        }
        res.status(201).json({ message: 'Library item created successfully', library });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }

})
  router.get('/inventary',  async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'please Login' });
    }
    try {
        const libraries = await libraryModel.find();
        res.status(200).json({ message: 'All library items fetched successfully', libraries });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;


