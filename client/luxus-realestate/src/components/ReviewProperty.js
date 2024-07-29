import axios from 'axios';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

const ReviewProperty = () => {
    const {id} = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can now submit the review and rating to your backend
    try {
        const res = await axios.post(`http://localhost:8000/api/properties/${id}/reviews`,{
            name,
            email,
            message,
            rating,
        })
        console.log(res)
        setSuccessMessage('Review Submitted Succesfully');
        setErrorMessage('');
        setName('')
        setEmail('')
        setMessage('')
        setRating(0)
    } catch (error) {
        setErrorMessage("Error In Submitting the Form")
    }
};      

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {/* Reviews */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-2">Reviews</h2>
        {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
        {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <textarea
            placeholder="Write your review"
            className="p-2 border rounded-md md:col-span-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md md:col-span-2"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewProperty;
