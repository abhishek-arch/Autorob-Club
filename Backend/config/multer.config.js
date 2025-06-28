// 
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./claudinary');

const userprofilestorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user-profiles',       // cloud folder name
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  },
});

const upload = multer({ storage:userprofilestorage });


const adminprofilestorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'admin-profiles',       // cloud folder name
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  },
});

const adminprofiles = multer({ storage:adminprofilestorage });


const inventaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'AutorobInventary',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  },
});
const inventaryUpload = multer({ storage: inventaryStorage });

module.exports = {upload, inventaryUpload,adminprofiles};
