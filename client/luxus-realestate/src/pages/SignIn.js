import React from 'react'

const SignIn = () => {
  return (
    <div className=' mx-40 my-20'>
        <div  className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div style={{backgroundColor:"#05B0FB"}} className='h-[650px] rounded-lg'>
                <img src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/05/register-img.webp' className=' pt-7 px-3' alt='login-form' />
            </div>
            <div>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Luxes</h2>
        <p className="text-center mb-6">Let's get started by creating your free account.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username*</label>
            <input
              type="text"
              name="username"
            //   value={formData.username}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex mb-4">
            <div className="mr-2 w-1/2">
              <label className="block text-gray-700">First Name*</label>
              <input
                type="text"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-gray-700">Last Name*</label>
              <input
                type="text"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password*</label>
            <input
              type="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
            //   value={formData.confirmPassword}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Select Account Type*</label>
            <select
              name="accountType"
            //   value={formData.accountType}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Please Select Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn