const libraryModel = require('../db/Models/library.model');

const createLibrary = async ({ Product , Detail, Available,ProductImage:{url,public_id} }) => {
    if (!Product  || !Available) {
        throw new Error('All fields are required');
    }

    const existingProduct = await libraryModel.findOne({ Product });
    if (existingProduct) {
        throw new Error('Product with this name already exists');
    }

    const library = await libraryModel.create({
        Product,
        Detail,
        Available,
        ProductImage:{
            url,
            public_id
        }
    });

    return library;
}
module.exports = createLibrary;