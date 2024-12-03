import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar';
import Metrics from './Metrics';
import PropertyCard from './PropertyCard';
import axios from 'axios';
// jwtDecode was commented out, removing it since it's not used

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // To store user data
  const [userProperties, setUserProperties] = useState([]); // To store properties uploaded by the user
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        // Fetch user properties from the backend
        const userResponse = await axios.get(`http://localhost:8000/api/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in headers
          }
        });
        setUserProperties(userResponse.data); // Set user properties
      } catch (error) {
        console.error('Error fetching user or property data:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false once the data is fetched or an error occurs
      }
    };

    fetchData();
  }, []);

  // Display loading spinner or text while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if an error occurs
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          {/* Pass user properties and any other metrics to the Metrics component */}
          <Metrics 
            userProperties={userProperties} 
            profileViews={userData?.profileViews || 0} 
            bookmarks={userData?.bookmarks || 0} 
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Render property cards */}
              {userProperties.map((property) => (
                <PropertyCard
                  key={property._id}
                  size={property.size}
                  price={property.price}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
