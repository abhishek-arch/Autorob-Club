import React, { useContext } from "react";
import { useState } from "react";
import AutoRoblogo from "../assets/images/Autoroblogo.png";
import homesvg from "../assets/images/home.svg";
import { AdminContextData } from "../Context/AdminContext";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [Branch, setBranch] = useState("");
  const [RollNo, setRollNo] = useState("");
  const { admin, setAdmin } = useContext(AdminContextData);
  const [AdminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      RollNo: RollNo,
      Branch: Branch,
      AdminKey: AdminKey,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/admins/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(async (Response) => {
      if (Response.status === 201) {
        const data = await Response.json();
        setAdmin(data.admin);
        localStorage.setItem("token", data.token);
        navigate("/Autorob-Club/admin-home");
      } else {
        const data = await Response.json();
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setLoading(false);
        setFirstName("");
        setlastName("");
        setBranch("");
        setRollNo("");
        setemail("");
        setPassword("");
        setAdminKey("");
      }
    });
  };

  return (
     <>
        <ToastContainer
          
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
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <img
            className="w-52 mb-2 invert"
            src={AutoRoblogo}
            alt=""
            srcset=""
          />
          <div>
            <Link to="/" className=" cursor-pointer">
              <img className="w-12 " src={homesvg} alt="" />
            </Link>
          </div>
        </div>

        <form onSubmit={handlesubmit}>
          <h3 className="text-lg font-medium mt-5 mb-2">
            What's our Admin's name
          </h3>
          <div className="flex  ">
            <input
              required
              className="border bg-[#eeeeee]  px-4 py-2 mr-2 rounded mb-7 w-1/2 text-lg placeholder:text-base"
              type="text"
              name="firstname"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              required
              className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-1/2 text-lg placeholder:text-base"
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ">
            <input
              required
              className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-1/2 text-lg placeholder:text-base"
              type="Number"
              name="RollNo"
              placeholder="Roll No"
              value={RollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />

            <input
              required
              className="border bg-[#eeeeee]  px-4 py-2 mr-2 rounded mb-7 w-1/2 text-lg placeholder:text-base"
              type="text"
              name="Branch"
              placeholder="Branch"
              value={Branch}
              onChange={(e) => setBranch(e.target.value)}
            />

            <input
              required
              className="border bg-[#eeeeee]  px-4 py-2 mr-2 rounded mb-7 w-1/2 text-lg placeholder:text-base"
              type="text"
              name="AdminKey"
              placeholder="Admin Key"
              value={AdminKey}
              onChange={(e) => {
                setAdminKey(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's our admin's email</h3>

          <input
            required
            className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h3 className="ext-lg font-medium mb-2"> Enter password</h3>

          <input
            required
            className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className=" bg-[#111] text-white font-semibold  px-4 py-2 rounded mb-3 w-full text-lg placeholder:text-base"
            type="submit"
          >
            {" "}
            {loading ? "Loading..." : "SignUp"}
          </button>
        </form>

        <p className="text-center">
          Already have an Account ?{" "}
          <Link to="/Autorob-Club/adminlogin" className=" text-blue-500">
            Login Here
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Privacy Policy</span>
        <span>Terms and Condition</span>
        <span>Contact us</span>
        <span>Help</span>
      </div>
    </div>
    </>
  );
};

export default AdminSignup;
