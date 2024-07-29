import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center py-16 bg-gray-50'>
            <h1 className='text-xl font-thin flex items-center justify-center font-quicksand mt-8'>
                Testimonials
            </h1>
            <h2 className='text-3xl font-bold mt-3 flex items-center justify-center'>Clients Feedback</h2>
            <div className='w-full mt-8'>
                <TestimonialCarousel />
            </div>
        </div>
    );
}

export default Testimonials;
