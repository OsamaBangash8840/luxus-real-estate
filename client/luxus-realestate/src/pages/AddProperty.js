import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [buildYear, setBuildYear] = useState('');
  const [size, setSize] = useState('');
  const [lotSize, setLotSize] = useState('');
  const [amenities, setAmenities] = useState('');
  const [images, setImages] = useState([]);
  const [mapLocation, setMapLocation] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = async (files) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
  
    try {
      const res = await axios.post('http://localhost:8000/api/upload', formData);
      const uploadedImageUrls = res.data.map(file => file.imageUrl);
      return uploadedImageUrls; // Return URLs
    } catch (err) {
      console.error('Image upload failed:', err);
      toast.error('Image upload failed');
      throw err; // Throw to handle in calling function
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return toast.error("You have to log in first");
  
    try {
      // First, upload images and get their URLs
      const imageFiles = document.querySelector('input[type="file"]').files;
      const uploadedImages = await handleImageUpload(imageFiles);
  
      const propertyData = {
        title,
        description,
        price,
        location,
        buildYear,
        size,
        lotSize,
        amenities,
        images: uploadedImages, // Corrected to use the returned URLs
        mapLocation,
        category,
      };
  
      const res = await axios.post(
        'http://localhost:8000/api/properties',
        propertyData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      if (res.data) {
        toast.success(`Property "${res.data.title}" is successfully registered`, { autoClose: 8000 });
        navigate('/');
      } else {
        toast.error("Unexpected request response");
      }
    } catch (err) {
      console.error('Error:', err);
      const message = err.response ? err.response.data : 'An error occurred';
      setErrorMessage(typeof message === 'string' ? message : JSON.stringify(message));
    }
  };
  

  const handleImageChange = (e) => {
    setImages(e.target.files); // Directly store the FileList object
  };


  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-lg mx-auto">
        <h1 className='text-2xl'>Add a Property</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Property Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Property Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Property Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Property Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Property Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="Property Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Property Type
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                placeholder="Property Type"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buildYear">
                Property Build Year
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="buildYear"
                type="number"
                placeholder="Property Build Year"
                value={buildYear}
                onChange={(e) => setBuildYear(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
                Property Size (sq ft)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="size"
                type="number"
                placeholder="Property Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lotSize">
                Property Lot Size (sq ft)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lotSize"
                type="number"
                placeholder="Property Lot Size"
                value={lotSize}
                onChange={(e) => setLotSize(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amenities">
                Property Amenities
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amenities"
                placeholder="E.g., Swimming Pool, Gym, Parking"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mapLocation">
              Property Map Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mapLocation"
              type="text"
              placeholder="Property Map Location"
              value={mapLocation}
              onChange={(e) => setMapLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
              Drop Images
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images"
              type="file"
              name="images"
              placeholder="Drop Images"
              onChange={handleImageChange}
              multiple
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Property Price ($)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Property Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </form>
      </div>
    </>
  );
};

export default AddProperty;
