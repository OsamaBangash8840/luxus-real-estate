import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar';
import Metrics from './Metrics';
import PropertyCard from './PropertyCard';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode

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

        // Decode the token to get the user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Assuming the token contains `id` as the user ID
        console.log(decodedToken);
        // Fetch user information
        const userResponse = await axios.get(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in headers
          }
        });
        setUserData(userResponse.data);

        // Fetch properties uploaded by the user
        const propertyResponse = await axios.get(`/api/properties/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in headers
          }
        });
        setUserProperties(propertyResponse.data);
      } catch (error) {
        console.error('Error fetching user or property data:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false once the data is fetched or an error occurs
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display while loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          <Metrics userProperties={userProperties} profileViews={userData.profileViews} bookmarks={userData.bookmarks} />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
