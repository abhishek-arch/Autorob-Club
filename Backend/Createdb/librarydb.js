const libraryModel = require('../db/Models/library.model');

const createLibrary = async ({ Product , Detail, Available,ProductUrl }) => {
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
        ProductUrl
    });

    return library;
}
module.exports = createLibrary;