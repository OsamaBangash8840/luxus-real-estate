import React from 'react';

const BlogSection = () => {
    return (
        <div className='bg-sky-200 pb-10'>
            <h1 className='text-xl font-thin flex items-center justify-center font-quicksand pt-6'>
                News & Blog
            </h1>
            <h2 className='text-3xl font-bold mt-3 flex items-center justify-center'>Latest News Feed</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 gap-6 px-6 md:px-16 lg:px-28'>
                <div className='border border-gray-400 bg-white rounded-lg p-6 flex flex-col justify-between h-full'>
                    <h1 className='text-2xl font-medium text-black'>Embracing Minimalism: The Power of Less</h1>
                    <p className='mt-2'>
                        In a world brimming with excess, embracing minimalism offers a refreshing escape from clutter and distraction.
                    </p>
                    <hr className='mt-3' />
                </div>
                <div className='border border-gray-400 bg-white rounded-lg p-6 flex flex-col justify-between h-full'>
                    <h1 className='text-2xl font-medium text-black'>Transforming the Modern Workplace</h1>
                    <p className='mt-2'>
                        Remote work has rapidly evolved from a niche option to a mainstream reality, reshaping the dynamics of the modern workplace.
                    </p>
                    <hr className='mt-3' />
                </div>
                <div className='border border-gray-400 bg-white rounded-lg p-6 flex flex-col justify-between h-full'>
                    <h1 className='text-2xl font-medium text-black'>Small Changes for a Big Impact In Life</h1>
                    <p className='mt-2'>
                        Explore practical tips and strategies for integrating sustainability into your lifestyle and making a positive impact on the environment.
                    </p>
                    <hr className='mt-3' />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
