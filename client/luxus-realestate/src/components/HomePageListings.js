import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePageListings = ({ listing }) => {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/properties');
      if (response.data) {
        setListings(response.data);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error Fetching Listing", error);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <h1 className='text-3xl font-bold mt-14 mb-3 flex items-center justify-center '>Latest Property Listings</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-5 mx-6 lg:mx-32'>
        {listings.length > 0 ? (
          listings.slice(0, 6).map((listingItem, index) => (
            <Link to={`/property/${listingItem._id}`} key={index}>
              <div className="rounded-md p-4 items-center">
                <div className="rounded overflow-hidden shadow-lg bg-white">
                  <img className="w-full h-48 lg:h-64 object-cover" src={listingItem.images[0]} alt="Property" />
                  <div className="px-4 py-2">
                    <div className="font-bold w-full text-xl mb-2">{listingItem.title}</div>
                    <p className="text-gray-700 text-base">{listingItem.location}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{listingItem.size}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{listingItem.price}-Rs</span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="flex flex-wrap items-center">
                      <div className="flex items-center mr-4">
                        <span className="text-gray-600">Bedrooms</span>
                        <span className="ml-1">{listing[index]?.bedrooms}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <span className="text-gray-600">Bathrooms</span>
                        <span className="ml-1">{listing[index]?.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600">Parking</span>
                        <span className="ml-1">{listing[index]?.parking}</span>
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
          <div className='text-center text-2xl font-bold'>No Listings Found</div>
        )}
      </div>
    </>
  );
};

export default HomePageListings;
