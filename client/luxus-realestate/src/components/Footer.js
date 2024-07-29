import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-4">Luxus</h2>
          <p className="mb-2"><i className="fas fa-phone-alt"></i> +123 456 7890</p>
          <p className="mb-2"><i className="fas fa-fax"></i> +123 456 7899</p>
          <p><i className="fas fa-envelope"></i> info@yourdomain.com</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-4">General Info</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Our Properties</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Our Agencies</a></li>
            <li><a href="#" className="hover:underline">Our Agents</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Blog / News</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Elements</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing Tables</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="mb-4">To get free & amazing offers and other cool things stay with us. Please subscribe to us.</p>
          <form>
            <input type="email" placeholder="Your email" className="w-full p-2 rounded-md mb-2"/>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">&copy; 2024 Luxus. All Rights Reserved</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
