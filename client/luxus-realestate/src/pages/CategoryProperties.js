// CategoryProperties.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CategoryProperties = () => {
    const { id } = useParams(); // Get category ID from URL params
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                // Ensure category ID is passed correctly in query parameters
                const response = await axios.get('http://localhost:8000/api/category', {
                    params: { category: id }
                });
                setProperties(response.data);
            } catch (error) {
                setError('Failed to fetch properties');
            }
        };
        fetchProperties();
    }, [id]);

    if (error) return <div>{error}</div>;

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Properties in Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {properties.map(property => (
                        <div key={property._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src={property.images[0]} alt="Property" className="w-full mb-2 rounded-lg" />
                            <h3 className="text-xl font-bold">{property.title}</h3>
                            <p className="text-gray-600">Price: {property.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CategoryProperties;
