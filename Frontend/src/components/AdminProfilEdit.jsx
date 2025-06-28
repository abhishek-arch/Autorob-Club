import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageUpdated, setImageUpdated] = useState(false);
  const [phoneNo, setPhoneNo] = useState(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // const admindashboard={

    // }

    axios.post(
      `${import.meta.env.VITE_BASE_URL}/admins/dashboard`,{},
      {
         headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const admin = response.data.existingAdmin || response.data.admindashboard;
        
        const profilephoto = admin.profilephoto?.url||"";
        setProfileImage(profilephoto);
        setFormData({
          firstname: admin.fullname?.firstname||"",
          lastname: admin.fullname.lastname||"",
            Branch: admin.Branch || "",
          expertise: admin.expertise || "Robotics",
          gender: admin.gender || "",
          email: admin.email|| "",
          phone: admin.phone || "",
          RollNo: admin.RollNo|| "",

        });
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/Autorob-Club/adminlogin");
      });

       
  }, [isChanged]);
   
      




      
   
      

    

  const handlecapture = (e) => {
    setIsChanged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const profiledata = {
      fullname: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      expertise: formData.expertise,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      RollNo: formData.RollNo,
      Branch: formData.Branch,
      profilephoto: "profilephoto.jpg",
    };
    axios.put(
      `${import.meta.env.VITE_BASE_URL}/admins/editprofile`,
      profiledata,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(()=> setIsChanged(false));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <form onChangeCapture={handlecapture} onSubmit={handleSubmit}>
        {formData &&
          Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-gray-700 capitalize mb-1">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                readOnly={key === "firstname" || key === "lastname" || key === "email"|| key === "RollNo" || key === "Branch" }
              />
            </div>
          ))}
        {isChanged && (
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileEdit;
