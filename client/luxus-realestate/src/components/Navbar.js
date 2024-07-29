import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
 
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-lg font-semibold"><img src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/05/Luxus-Light-1.webp' alt='...' className='h-12 w-40' /></Link>
          {/* Navbar links */}
          <div className="hidden md:flex justify-center flex-1">
            <Link to="/" className="text-white mx-4">Home</Link>
            <Link to="/" className="text-white mx-4">About</Link>
            <Link to="/products" className="text-white mx-4">Properties</Link>
            <Link to="/" className="text-white mx-4">Blogs</Link>
            <Link to="/" className="text-white mx-4">Contact</Link>
          </div>
        
          <Link to="/sign-in" className="text-white mr-3 bg-black px-3 py-2 ">Sign In</Link>
          <Link to="/add-property" className="text-white mr-16 bg-slate-400 px-3 py-2 ">Add a Property</Link>
          {/* Mobile menu button (hidden on larger screens) */}
          {/* <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div> */}
        </div>
      </nav>
    </>
  );
};
export default Navbar;