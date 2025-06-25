import React, { useState ,useEffect,useRef} from 'react';
import { FaCamera } from 'react-icons/fa';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineLibraryBooks, MdInfo } from 'react-icons/md';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AutoRoblogo from "../assets/images/Autoroblogo.png"
import { MdDelete } from "react-icons/md";
import LibrarySection from '../components/LibrarySection';
import gsap from "gsap";
import {useGSAP} from '@gsap/react'



const ProfileDashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imageUpdated, setImageUpdated] = useState(false)
  const[phoneNo,setPhoneNo]             = useState(null)
  const[boolean, setBoolean] = useState(false)
const libraryRef = useRef(null);
const mainRef = useRef(null);

  
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
    
   
    axios.get(`${import.meta.env.VITE_BASE_URL}/admins/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        },
         
    }).then(response=>{
       const admin = response.data.admin;
    setFormData({
      firstname: admin.fullname.firstname,
      lastname: admin.fullname.lastname ,
      expertise: 'UI/UX Designer',
      gender: 'Male',
      email: admin.email ,
      phone: admin.phoneNo,   
      RollNo: admin.RollNo ,
    });
    setPhoneNo(admin.phoneNo)

     const profiledata ={
        fullname:{
      firstname: admin.fullname.firstname,
      lastname: admin.fullname.lastname },
      expertise: 'UI/UX Designer',
      gender: 'Male',
      email: admin.email ,
      phone: phoneNo,
      RollNo: admin.RollNo ,
      Branch: admin.Branch,
      profilephoto: "profilephoto.jpg"
    };
     axios.post(`${import.meta.env.VITE_BASE_URL}/admins/dashboard`,profiledata,{
            headers:{
            Authorization: `Bearer ${token}`
          
    }
        
    })

       axios.get(`${import.meta.env.VITE_BASE_URL}/admins/dashboard`,{ 
        headers:{
            Authorization: `Bearer ${token}`
          
    }}).then(response=>{
        const admin = response.data.existingAdminprofile;
        const profilephoto =admin.profilephoto.url
        setProfileImage(profilephoto)

    })

     
        
    })
    .catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/Autorob-Club/adminlogin')
    })


 
       
         
    
    
  
        
   
    



    
  
    
  }, [imageUpdated])
  
   
    

 const handlelibrary = () => {
  setBoolean(prev => !prev);
  

 }


  useGSAP(function() {
    if(boolean){
        
         gsap.to(libraryRef.current, { display:"", top:"0px" ,duration: 0.5});

    }
    else{
        gsap.to(libraryRef.current, { display:"none", top:"-150px" ,duration: 0});
        
   
  } }[boolean]);




  
 
  

  const handleImageUpload = async(e) => {
    const file = e.target.files[0];
    if (file) {
       const formDataData = new FormData();
    formDataData.append('image', file); 

    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/admins/upload`,
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
            <div>
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
          {/* <div className="text-sm text-gray-600 ml-6 mb-2">Student About</div> */}
          <div onClick={handlelibrary} className={`text-sm  ml-6 mb-2 flex items-center ${boolean ? "text-blue-600" :"text-gray-600"} space-x-2`}>
            <MdOutlineLibraryBooks /> <span>Library</span>
          </div>
          <div className="text-sm text-gray-600 ml-6 flex items-center space-x-2">
            <MdInfo /> <span>About</span>
          </div>
        </nav>
      </aside>

      {/* Main content */}





    < LibrarySection booleanAdmin={boolean} setbooleanAdmin={setBoolean} />



      





      <main ref={mainRef} className={`flex-1 p-4  md:p-6 ${boolean ? "hidden" : ""}`}>
        {/* Top header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md w-full md:w-80" />
          <div className="flex items-center space-x-4">
            <FiBell className="text-xl" />
            <FiUser className="text-xl" />
            <span className="font-medium">Bonnyra Jon</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold">{formData.firstname} {formData.lastname}</h2>
              {/* <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore, earum ad cum vel in quaerat, eius accusantium quas nam, iusto delectus ut nulla.</p> */}
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

          {/* Editable Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-gray-700 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
