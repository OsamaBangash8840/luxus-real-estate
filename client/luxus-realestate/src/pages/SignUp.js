import axios from 'axios'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();

  let message = '';
  if (password && confirmPassword) {
      if (password === confirmPassword) {
          message = 'Password confirmed';
      } else {
          message = "Password doesn't match";
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password
      })
        .then((res) => {
          if (res.data && res.data.email) {
            toast.success(`User ${res.data.email} is successfully Registered`, { autoClose: 8000 })
            navigate('/sign-in')
          }
        })
        .catch((err) => {
          toast.error('Registration failed', { autoClose: 8000 });
        })
    }
    else {
      toast.error('Passwords do not match', { autoClose: 8000 });
    }
  }

  return (
    <>
      <Navbar />
      <div className=' sm:mx-40 sm:my-20'>
        <div className='grid sm:grid-cols-2'>
          <div style={{ backgroundColor: "#05B0FB" }} className=' rounded-lg '>
            <img src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/05/register-img.webp' className=' pt-7 px-3' alt='login-form' />
          </div>
          <div>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Luxes</h2>
              <p className="text-center mb-6">Let's get started by creating your free account.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Username*</label>
                  <input
                    type="text"
                    name="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <span>{message}</span>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp