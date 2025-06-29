import React, { useState ,useEffect} from 'react';
import { FaCamera } from 'react-icons/fa';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineLibraryBooks, MdInfo } from 'react-icons/md';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AutoRoblogo from "../assets/images/Autoroblogo.png"
import EditProfile from '../components/UserProfileEdit'

const ProfileDashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imageUpdated, setImageUpdated] = useState(false)
  const[phoneNo,setPhoneNo]             = useState(null)
  
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  

const [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  expertise: 'UI/UX Designer',
  gender: 'Male',
  email: "",
  phone: '+910345678990',
  RollNo: "",
});

  
 useEffect(() => {



  axios.get(`${import.meta.env.VITE_BASE_URL}/users/dashboard`,{
          headers:{
              Authorization: `Bearer ${token}`
          },
           
      }).then(response=>{
         const user = response.data.existingUserprofile || response.data.userdashboard;
         const profilephoto = user.profilephoto?.url || "";
         setProfileImage(profilephoto);
         setFormData({
           firstname: user.fullname?.firstname || "",
           lastname: user.fullname?.lastname || "",
         })
        
        
//         
})



}, [imageUpdated])
  
   
    

  
 
  

  const handleImageUpload = async(e) => {
    const file = e.target.files[0];
    if (file) {
       const formDataData = new FormData();
    formDataData.append('image', file); 

    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/upload`,
      formDataData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );
        setImageUpdated(prev => !prev); 

  }};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-4 md:p-6 shadow-md">
        <div className='flex items-center justify-between'>
            <div onClick={() => navigate('/Autorob-Club/user-home')} className='cursor-pointer'>
       <img className='w-32 mb-2 invert' src={AutoRoblogo} alt="" srcset="" />

            </div>
            <div>
                    <img
            src={`${profileImage}` || 'https://www.svgrepo.com/show/447111/avatar-boy.svg'}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border"
          />
           <div className="font-semibold pr-3 mt-2">{formData.firstname} {formData.lastname}</div>
            </div>
        </div>

        {/* Profile section */}
        <div className="flex items-center mb-6 space-x-3">
          
          <div>
           
            <div className="text-xl pl-4 text-gray-500">HBTU</div>
          </div>
        </div>

        <nav>
          <div className="mb-4 flex items-center space-x-2 text-blue-600 font-semibold">
            <MdOutlineDashboard /> <span>Dashboard</span>
          </div>
         
        
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Top header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md w-full md:w-80" />
          <div className="flex items-center space-x-4">
            <FiBell className="text-xl" />
            <FiUser className="text-xl" />
            <span className="font-medium"></span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">{formData.firstname} {formData.lastname}</h2>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore, earum ad cum vel in quaerat, eius accusantium quas nam, iusto delectus ut nulla.</p>
              <div className="mt-2 space-x-4 text-sm">
                <span className="text-blue-600"> Kanpur 3564</span>
                <span onChange={(e)=> setPhoneNo(e.target.value)} value={phoneNo} className="text-blue-600">{formData.phone}</span>
                <span className="text-blue-600">{formData.email}</span>
              </div>
            </div>
            <div className="relative">
              <img
                src= {`${profileImage}` || 'https://www.svgrepo.com/show/447111/avatar-boy.svg'}
            alt="Profile"
                className="w-24 h-24 rounded-full border-2 object-cover"
              />
              <label htmlFor="image-upload" className="absolute bottom-0 right-0 p-2 bg-gray-800 text-white rounded-full cursor-pointer">
                <FaCamera />
              </label>
              <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>
          </div>

          <EditProfile/>
         
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
