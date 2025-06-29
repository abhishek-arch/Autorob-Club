import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const AvailableItems = (props) => {
  const [inventary, setInventary] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [itemsChanged, setItemsChanged] = useState({});
  const [loading, setLoading] = useState(true); // ✅ added
  const [updatingId, setUpdatingId] = useState(null); // ✅ added
  const [showPrompt, setShowPrompt] = useState(false);
const [inputValue, setInputValue] = useState('');
const [selectedItemId, setSelectedItemId] = useState(null);
const [reload, setReload] = useState(false);
const[isSubmit, setIsSubmit] = useState(false);


  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/library/inventary`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      const data = res.data.libraries;
      setInventary(data);

      const quantityMap = {};
      const changeMap = {};
      data.forEach((item) => {
        quantityMap[item._id] = item.Available;
        changeMap[item._id] = false;
      });
      setQuantities(quantityMap);
      setItemsChanged(changeMap);
      setLoading(false); 
    })
    .catch((err) => {
      console.error("Error fetching inventory:", err);
      setLoading(false); 
    });
  }, [reload]); 

  const handleChange = (id, type) => {
  setQuantities((prev) => {
    const newQty = type === 'add'
      ? Number(prev[id]) + 1
      : Math.max(0, Number(prev[id]) - 1);
    return { ...prev, [id]: newQty };
  });
  setItemsChanged((prev) => ({ ...prev, [id]: true }));
};


const handleUpdate = (id) => {
    setSelectedItemId(id);
    setShowPrompt(true)}

  const handleSubmit = (id) => {
   
    setIsSubmit(true);
    const updatedQty = quantities[selectedItemId]
    setUpdatingId(id); 

    axios.post(`${import.meta.env.VITE_BASE_URL}/library/update`, {
     id: selectedItemId,
    updatedQuantity: updatedQty,
    Adminkey: inputValue
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
         setShowPrompt(false)
          
       toast.success("updated Successfully!", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
      
    })
      setItemsChanged((prev) => ({ ...prev, [id]: false }));
    }).catch((err) => {
         const errorMessage =
            err.response?.data?.message || "Something went wrong";
              
              toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
      
    })}).finally(() => {
        setReload((prev) => !prev)
        setIsSubmit(false);
      setUpdatingId(null); // ✅ reset loading
    });
  };

  return (
    <>
    
    <ToastContainer
      width="30px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  
    <div ref={props.availableRef} className="border-2 w-full absolute bg-white p-4 md:w-full  ">
        <div className='flex justify-center'><h3 onClick={() => props.setIsopen(false)} className="text-3xl font-medium cursor-pointer"><i className="ri-arrow-down-wide-line"></i></h3></div>
        <div className='flex bg-slate-500 justify-center items-center'>
           
        <h1 className='text-3xl text-gray-300 pb-3'> Available Inventery</h1>
        </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading items...</div>
      ) : (
        inventary.map((item) => (
          <div key={item._id} className="flex gap-2 mb-2">

            <div className='overflow-hidden '>

            <img className="w-[96px] h-[80px] object-cover rounded-full border-2" src={item.ProductImage.url}  />

            </div>

            <div className="w-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.Product}</h2>
                <p className="text-gray-600 text-sm">{item.Detail}</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Available: {quantities[item._id]}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleChange(item._id, 'subtract')} className="w-6 h-6 flex justify-center items-center border rounded-full text-lg bg-white">
                    <i className="ri-subtract-line" />
                  </button>
                  <span className="w-8 text-center">{quantities[item._id]}</span>
                  <button onClick={() => handleChange(item._id, 'add')} className="w-6 h-6 flex justify-center items-center border rounded-full text-lg bg-white">
                    <i className="ri-add-line" />
                  </button>
                </div>
              </div>

              {itemsChanged[item._id] && (
                <button
                  className="mt-2 bg-green-500 text-white font-medium px-4 py-1 rounded"
                  onClick={() => handleUpdate(item._id)}
                  disabled={updatingId === item._id} // ✅ disable during update
                >
                  {updatingId === item._id ? 'Updating...' : 'Update'}
                </button>
              )}
            </div>
          </div>
        ))
      )}

        {showPrompt && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-80">
      <h2 className="text-lg font-semibold mb-2">Enter your value</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
        placeholder="Admin key"
      />
      <div className="flex justify-end gap-2">
        <button onClick={() => { setShowPrompt(false); setReload((prev)=>!prev); }} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">{isSubmit?"Submitting...":"Submit"}</button>
      </div>
    </div>
  </div>
)}


    </div>
      </>
  );
};

export default AvailableItems;
