import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const {data} = await axios.post('/api/seller/login',{email,password})
      if(data.success){
        setIsSeller(true);
        navigate('/seller')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);
  return (
    !isSeller && (
      <div>
        <form
          onSubmit={onSubmitHandler}
          className=" min-h-screen flex items-center text-sm text-gray-600"
        >
          <div className=" flex flex-col gap-4 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className=" text-2xl font-medium m-auto">
              <span className=" text-indigo-500">Seller</span>Login
            </p>
            <div className=" w-full">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                required
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>

            <div className=" w-full">
              <p>Email</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                required
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <button className="bg-indigo-500 w-full text-white p-2 ">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default SellerLogin;
