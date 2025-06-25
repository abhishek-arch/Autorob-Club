import React from 'react'
import { FaCamera } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import profileImage from '../assets/images/test.png'; // Placeholder image, replace with your own
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import { useEffect ,useRef} from 'react';
import { RiRobot3Fill } from "react-icons/ri";



const LibrarySection = (props) => {

    const libraryRef = useRef(null);    
    const [boolean, setBoolean] = useState(false)
    const additemRef = useRef(null);
    const [productimg, setProductimg] = useState(null);


    const handleAddItems = () => {
        setBoolean(true);
    };
    

    const handledeleteitems = () => {
        setBoolean(false);
    };
    


    const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Assuming you want to set the profile image to the uploaded file
      setProductimg(reader.result);
    };
    reader.readAsDataURL(file);
  }
};






 useGSAP(function() {
    if(boolean){
        gsap.to(additemRef.current, { display:"none", duration: 0 });
         gsap.to(libraryRef.current, { display:"", top:"0px" ,duration: 0.5});

    }
    else{
        gsap.to(libraryRef.current, { display:"none", top:"-150px" ,duration: 0});
        gsap.to(additemRef.current, { display:"", duration: 0.3 });
    }
   
  }, [boolean]);
  useGSAP(function() {
    if(props.booleanAdmin){
        gsap.to(additemRef.current, { display:"", duration: 0 });
    }
    else{
        gsap.to(additemRef.current, { display:"none", duration: 0 });
    }   
  }, [props.booleanAdmin]);


 

  return (
    <>
     <div ref={additemRef} className={`flex justify-between ${props.booleanAdmin? "" : "hidden"} items-center md:h-12 gap-4 relative z-0 border-gray-300  border-b-2 p-2  md:w-full`}>
                
                <h1 className='text-3xl font-extrabold'>AUTOROB-INVENTARY</h1>
              
               <button onClick={handleAddItems} className='bg-orange-500 rounded-md text-md text-white p-2'>Add-Items</button>
             </div>


   

  <div ref={libraryRef} className={`relative w-full md:p-6 z-10 `}>
          <div className='  p-4 absolute w-full top-0 left-0 z-10'> 
             <div className='flex justify-end items-center gap-4  border-gray-300  pb-1'>
              
               <button onClick={handledeleteitems} className='w-10 h-11 bg-[#FFFFFF] text-2xl font-bold rounded-md  flex items-center justify-center'><MdDelete /></button>
               <button className='bg-green-500 rounded-md text-md text-white p-2'>Publish</button>
             </div>
             <div className=' mt-2 bg-[#FFFFFF]'>
                  <div className="relative flex justify-center flex-col items-center ">
                 <img
                   src= { `{productimg}` || 'https://www.svgrepo.com/show/447111/avatar-boy.svg'}
               alt="Profile"
                   className="w-24 h-24 rounded-full border-2 object-cover mt-4"
                 />
                 <label htmlFor="image-upload" className=" absolute top-20  p-2 bg-gray-800 text-white rounded-full cursor-pointer  ">
                   
                   <FaCamera />
                 </label>
                 <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
               </div>
               <div className='flex mt-10 flex-col justify-center items-start'>
                 <div className='flex  items-center gap-6 mb-5 w-full p-2'>
                   <h3>Product</h3>
                  <input className='border-2 w-full placeholder:text-center' type="text" name="Product" id="" placeholder='Product Name'/>
   
                 </div>
                 <div className='flex  items-center gap-4 rounded-md mb-5 w-full p-2'>
                   <h3>Available</h3>
                   <input className='border-2 w-full placeholder:text-center' type="number"  name ="Available" placeholder='Available items'/>
                 </div>
                 <div className='flex  items-center gap-9 rounded-md w-full p-2'>
                   <h3>Detail</h3>
                   <input className='border-2 w-full placeholder:text-center' type="text"  name ="Detail" placeholder='Detail'/>
                 </div>
                 <div className='flex  items-center gap-12 rounded-md w-full p-2 '>
                   <h3>Admin-Key</h3>
                   <input className='border-2 placeholder:text-center md:w-[75vw]' type="number"  name ="Key" placeholder='Admin-key'/>
                 </div>
                 
                 
               </div>
                
             </div>
   
         </div>
   
   
          </div>
   
   

   
 
   </>
   
  )
}

export default LibrarySection
