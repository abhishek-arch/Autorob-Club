const mongoose = require("mongoose");

const AdminProfileSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenth: [3, "first name must be at least 3 characters long"],
    },
    lastname: {
      type: String,

      minlenth: [3, "first name must be at least 3 characters long"],
    },
  },
  RollNo: {
    type: String,
    required: true,
    // unique: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  expertise: {
    type: String,
  },
  phone: {
    type: String,
  },

  profilephoto: {
    url: String,
  public_id: String
  },
  gender:{
    type:String
  }
});

module.exports = mongoose.model("AdminDashboard", AdminProfileSchema);
