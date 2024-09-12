import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import {useAuth} from '../components/context/Auth'

const SignIn = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  // const {storeTokenInLs} = useAuth();

 const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
    const res= await axios.post('http://localhost:8000/api/login',{
      email,
      password
    });
    // storeTokenInLs(res.data.token);
    const token = res.headers['token'];
    if(token){
      localStorage.setItem('token',token);
      toast.success(`User ${email} has successfully Logged In`);
      navigate('/dashboard');
    }else{
      toast.error("Token Not Recieved From Server");
    }  
  } catch (error) {
    console.error('Login error :',error)
    toast.error(error.res?.data.message || 'Login Failed');
  }
}

  return (
    <div className=' mx-40 my-20'>
        <div  className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div style={{backgroundColor:"#05B0FB"}} className=' rounded-lg'>
                <img src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/05/register-img.webp' className=' pt-7 px-3' alt='login-form' />
            </div>
            <div>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md pt-24">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Luxes</h2>
        <p className="text-center mb-6">Let's get started by creating your free account.</p>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password*</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>       
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn