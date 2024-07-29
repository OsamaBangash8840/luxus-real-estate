import React from 'react';
import { Link } from 'react-router-dom';

const SellProperty = () => {
    return (
        <>
            <div className='bg-sky-200 flex flex-col items-center justify-center py-12'>
                <h1 className='text-3xl text-white font-bold pt-32'>
                    Ready to Sell Property
                </h1>
                <p className='text-white mt-4 text-center max-w-md'>
                    Are you ready to sell your property? Our platform provides a seamless and user-friendly experience for listing your property.
                </p>
                <Link to="/add-property" className="text-white bg-slate-400 px-4 py-2 mt-4 rounded">
                    Add a Property
                </Link>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-8 px-4 w-full max-w-7xl'>
                    <div className='bg-white overflow-hidden shadow-lg rounded-lg flex flex-col items-center justify-center p-6'>
                        <img className='w-16' src='https://www.svgrepo.com/show/4253/properties-sale-sign.svg' alt='Properties Sold' />
                        <h1 className='text-xl mt-2'>Properties Sold</h1>
                        <h1 className='text-2xl mt-1'>500+</h1>
                    </div>
                    <div className='bg-white overflow-hidden shadow-lg rounded-lg flex flex-col items-center justify-center p-6'>
                        <img className='w-16' src='https://www.svgrepo.com/show/455502/sold-house.svg' alt='Sold House' />
                        <h1 className='text-xl mt-2'>Sold Houses</h1>
                        <h1 className='text-2xl mt-1'>200+</h1>
                    </div>
                    <div className='bg-white overflow-hidden shadow-lg rounded-lg flex flex-col items-center justify-center p-6'>
                        <img className='w-16' src='https://www.svgrepo.com/show/350208/users.svg' alt='Users' />
                        <h1 className='text-xl mt-2'>Users</h1>
                        <h1 className='text-2xl mt-1'>1000+</h1>
                    </div>
                    <div className='bg-white overflow-hidden shadow-lg rounded-lg flex flex-col items-center justify-center p-6'>
                        <img className='w-16' src='https://www.svgrepo.com/show/480322/academy-award-style-trophy.svg' alt='Awards' />
                        <h1 className='text-xl mt-2'>Awards</h1>
                        <h1 className='text-2xl mt-1'>50+</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellProperty;
