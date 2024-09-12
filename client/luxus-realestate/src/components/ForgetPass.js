import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ForgetPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/forget-password", { email });
            setMessage(response.data.message || 'Email sent successfully');
        } catch (error) {
            setMessage("Error sending an email");
            toast.error(error.response?.data?.message || 'No Email Found');
        }
    }

    return (
        <>
            <Navbar />
            <div className='mx-40 my-20'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <div style={{ backgroundColor: "#05B0FB" }} className='rounded-lg'>
                        <img src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/05/register-img.webp' className='pt-7 px-3' alt='login-form' />
                    </div>
                    <div>
                        <div className="bg-white p-8 rounded shadow-md w-full max-w-md pt-24">
                            <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Luxes</h2>
                            <p className="text-center mb-6">Enter your email to reset your password.</p>
                            <form onSubmit={handleSubmit} >
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
                            </form>
                            {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                            <Link to="/sign-in" className="block mt-4 text-center text-blue-500">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ForgetPass;
