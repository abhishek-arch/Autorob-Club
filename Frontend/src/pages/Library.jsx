import React from 'react'
import img from '../assets/images/test.png'
import 'remixicon/fonts/remixicon.css';
import { useState,useEffect } from 'react';
import AutoRoblogo from '../assets/images/Autoroblogo.png'
import axios from 'axios';
import { RiRobot3Fill } from "react-icons/ri";




const Library = () => {
 const  [items, setItems] = useState([])
 const [Available, setAvailable] = useState(1)
 const [inventary, setinventary] = useState([])
 const token = localStorage.getItem('token')

 useEffect(() => {
     axios.get(`${import.meta.env.VITE_BASE_URL}/library/inventary`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then((response) => {
    if (response.status === 200) {
        const data = response.data.libraries;
     
        setinventary(data)
        setItems(data.map(() => 1))
       
        setAvailable(inventary.map(item => item.Available))
    }}).catch((error) => {
        console.error("Error fetching inventary:", error);
    });







 
  
 }, [])
 

 const handleAdd = (index) => {
  setItems(prev => {
    const newItems = [...prev];
    // Use inventary[index].Available for max
    if (newItems[index] < inventary[index].Available) {
      newItems[index] += 1;
    }
    return newItems;
  });
};

const handleSubtract = (index) => {
  setItems(prev => {
    const newItems = [...prev];
    if (newItems[index] > 1) {
      newItems[index] -= 1;
    }
    return newItems;
  });
};



  return (
    <>
      <div className=' border-2 w-full '>
        <div className='flex bg-slate-500  items-center'>
            <img className='w-32 mb-2 invert' src={AutoRoblogo} alt=""  />

        <h1 className='text-3xl text-gray-300 pb-3'> Available Inventory</h1>
        </div>
       
            {inventary.map((obj,index)=>{
                return(
                    <div  key={index} className='flex gap-2 mb-2  '>
                        <div className='  overflow-hidden '>
            <img className='w-24 h-24 object-cover rounded-full border-2' srcSet={obj.ProductImage.url} alt="" />
            
        </div>
            <div className='w-[75vw] md:w-full flex flex-col px-2 box-border'>
                <div className='overflow-hidden'>
                     <h2 className='text-xl font-medium'>{obj.Product}</h2>
                     <span>{obj.Detail}
                     </span>

                </div>
               
                <div className='flex justify-between mb-2'>
                <p className='text-slate-500'>Available {obj.Available}</p>
                <div className='flex justify-center items-center gap-2'>
                    <h3 onClick={()=>handleSubtract(index)} className='w-6 h-6 rounded-full text-xl border-gray-400 border-2  flex justify-center items-center bg-white shadow-xl'>
                 <i className="ri-subtract-line"></i>

                    </h3>
                    <h3  className='w-6 h-6  rounded-full pl-2 text-xl'>{items[index]}</h3>
                    <h3 onClick={()=>handleAdd(index)} className='w-6 h-6 cursor-pointer shadow-xl flex justify-center items-center border-2 border-gray-400 rounded-full text-xl'>
                           <i className="ri-add-line"></i>
                        
                    </h3>
                </div>

                </div>
                <div className='flex justify-center items-center gap-2 w-full'>
                <button className='bg-green-500 text-lg font-medium rounded-md mb-1 w-full md:w-48'>Borrow</button>

                </div>
            </div>

                    </div>
                            
                )

            })}
 
        </div>

       
     
    </>
  )
}

export default Library
