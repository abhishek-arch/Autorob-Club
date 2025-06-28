import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutoRoblogo from "../assets/images/Autoroblogo.png";
import homesvg from "../assets/images/home.svg";
import { UserContextData } from "../Context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(UserContextData);

 const handlesubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const userdata = {
    email: email,
    password: password,
  };

    


try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userdata
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/Autorob-club/user-home");

      setemail("");
      setPassword("");

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  } catch (error) {
    const errorMessage =
    error.response?.data?.message || "Something went wrong";
      
    
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  } finally {
    setLoading(false); // ✅ always executed
  }




 
  
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>

          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="email@example.com"
          />

          <h3 className="ext-lg font-medium mb-2"> Enter password</h3>

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base"
            type="password"
            name="password"
            placeholder="password"
          />

          <button
            disabled={loading}
            className=" bg-[#111] text-white font-semibold  px-4 py-2 rounded mb-3 w-full text-lg placeholder:text-base"
            type="submit"
          >
            {" "}
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-center">
          New here?{" "}
          <Link to="/Autorob-Club/UserSignup" className=" text-blue-500">
            Create a new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/Autorob-Club/AdminLogin"
          className=" bg-[#10b461] flex items-center justify-center text-white font-semibold  px-4 py-2 rounded mb-3 w-full text-lg placeholder:text-base"
        >
          Sign in as Admin
        </Link>
      </div>
    </div>
    </>
  );
};

export default UserLogin;
