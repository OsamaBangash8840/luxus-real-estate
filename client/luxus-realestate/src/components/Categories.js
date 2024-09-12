import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories");
      if (response.data) {
        setCategories(response.data);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        {categories.length > 0 ? (
          categories.map((category, index) => (
              <Link to={`/category/${category._id}`} key={index}>
            <div className="bg-transparent shadow-md rounded-md p-4 items-center">
                <img
                  src={category.images}
                  className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 mx-auto rounded-sm'
                  alt='Card Img'
                />
                <h2 className="text-lg sm:text-xl md:text-2xl capitalize justify-center flex font-bold mt-2">{category.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>
    </>
  );
};

export default Categories;
