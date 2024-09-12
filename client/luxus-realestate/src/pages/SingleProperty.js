import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SubmitTour from '../components/SubmitTour';
import ReviewProperty from '../components/ReviewProperty';
import MapComponent from '../components/MapComponent';
import Footer from '../components/Footer';

const SingleProperty = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/properties/${id}`);
                setProperty(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : 'Error fetching data');
            }
        };
        loadData();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!property) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                {/* Property Header */}
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3">
                        <img src={property.images[0]} alt="Property" className="w-full h-96 rounded-lg mb-4" />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                        <p className="text-gray-600 mb-2">{property.location}</p>
                        <p className="text-gray-600 mb-2">Posted on: March 16, 2021</p>
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                            <div>
                                <p className="font-bold">Bennie Otto</p>
                                <p className="text-gray-600">Email: bennie@example.com</p>
                                <p className="text-gray-600">Phone: +123456789</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-bold flex items-center justify-center mb-4">Property Description</h2>
                    <p className="text-gray-700 flex items-center justify-center mb-4">
                      {property.description}  </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="font-bold">Price</h3>
                            <p className="text-gray-600 pt-2">{property.price} Rs</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Type</h3>
                            <p className="text-gray-600 capitalize pt-2">{property.type}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Area</h3>
                            <p className="text-gray-600 pt-2">{property.size}</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Location</h3>
                            <p className="text-gray-600 pt-2">{property.location}</p>
                        </div>
                    </div>
                </div>

                {/* Property Amenities */}
                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-bold mb-2">Property Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-gray-600">{property.amenities[0]}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">{property.amenities[1]}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">{property.amenities[2]}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">{property.amenities[3]}</p>
                        </div>
                    </div>
                </div>

                {/* Property Videos
                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-bold mb-2">Property Videos</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe src="video-url" className="w-full h-full rounded-lg"></iframe>
                    </div>
                </div> */}

           {/* Property Map */}
           <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-bold mb-2">Property Map</h2>
                {property.mapLocation && property.mapLocation.lat && property.mapLocation.lng ? (
                    <div className="aspect-w-16 aspect-h-9 mb-4" style={{ height: '400px' }}>
                        <MapComponent lat={property.mapLocation.lat} lng={property.mapLocation.lng} />
                    </div>
                ) : (
                    <div>Loading Map...</div>  // Placeholder for loading state
                )}
            </div>

                {/*  */}
              <SubmitTour/>

                {/* Related Properties */}
                {/* <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <h2 className="text-2xl font-bold mb-2">Related Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
                        {/* Related Property Cards */}
                        {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src="related-property-image.jpg" alt="Related Property" className="w-full mb-2 rounded-lg" />
                            <h3 className="text-xl font-bold">Family House in Central Park</h3>
                            <p className="text-gray-600">Price: $1,200,000</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src="related-property-image.jpg" alt="Related Property" className="w-full mb-2 rounded-lg" />
                            <h3 className="text-xl font-bold">Luxury Apartment in Manhattan</h3>
                            <p className="text-gray-600">Price: $2,300,000</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src="related-property-image.jpg" alt="Related Property" className="w-full mb-2 rounded-lg" />
                            <h3 className="text-xl font-bold">Condo in Brooklyn</h3>
                            <p className="text-gray-600">Price: $900,000</p>
                        </div>
                    </div>
                </div> */}

              <ReviewProperty/>
            </div>
            <Footer/>
        </>
    );
};

export default SingleProperty;
