import React, { useState } from 'react';

const OurProcess = ({ properties }) => {
    const [hovered, setHovered] = useState(null)

    const handleMouseEnter = (index) => {
        setHovered(index)
    }
    const handleMouseLeave = () => {
        setHovered(null)
    }
    return (
        <>
            <h1 className=' mt-6 text-xl font-thin flex items-center justify-center font-quicksand '>Our Process</h1>
            <h2 className='  text-3xl font-bold mt-3 flex items-center justify-center'>How it Works?</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 lg:mx-36 '>
                {properties.map((property, index) => (
                    <div key={index} className="rounded-lg p-4 items-center "
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`w-[360px] h-[350px]  pt-5 rounded overflow-hidden shadow-lg cursor-pointer transition-colors duration-300 ${hovered === index ? ' bg-sky-200 text-white' : 'bg-white'
                                }`}
                        >
                            <img className={`w-[140px] h-[140px]  mx-auto `} src={property.image} alt="Property" />
                            <div className="px-4 py-2 mx-auto">
                                <div className="font-bold w-full mt-6 ml-20 mr-20 text-xl mb-2">{property.title}</div>
                                <p className={` ${hovered === index ? 'text-white' : 'text-gray-700'} flex text-center mt-3 items-center mx-auto  text-base`}>{property.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurProcess;
