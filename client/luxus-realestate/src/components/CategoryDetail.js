import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryDetail = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const [properties, setProperties] = useState([]);

  // Fetch properties based on category ID
  const loadPropertiesByCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/properties/category/${id}`);
      if (response.data) {
        setProperties(response.data);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error Fetching Properties by Category", error);
    }
  };

  useEffect(() => {
    loadPropertiesByCategory();
  }, [id]);

  return (
    <>
      <h1 className='text-3xl font-bold mt-14 mb-3 flex items-center justify-center '>Properties in This Category</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-5 mx-6 lg:mx-32'>
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <Link to={`/property/${property._id}`} key={index}>
              <div className="rounded-md p-4 items-center">
                <div className="rounded overflow-hidden shadow-lg bg-white">
                  <img className="w-full h-48 lg:h-64 object-cover" src={property.images[0]} alt="Property" />
                  <div className="px-4 py-2">
                    <div className="font-bold w-full text-xl mb-2">{property.title}</div>
                    <p className="text-gray-700 text-base">{property.location}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.size}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{property.price}-Rs</span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="flex flex-wrap items-center">
                      <div className="flex items-center mr-4">
                        <span className="text-gray-600">Bedrooms</span>
                        <span className="ml-1">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <span className="text-gray-600">Bathrooms</span>
                        <span className="ml-1">{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Parking</span>
                        <span className="ml-1">{property.parking}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-gray-600 text-sm">
                      <span className="mr-2">Posted by: Webdeveloper</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className='text-center text-2xl font-bold'>No Properties Found in This Category</div>
        )}
      </div>
    </>
  );
};

export default CategoryDetail;
