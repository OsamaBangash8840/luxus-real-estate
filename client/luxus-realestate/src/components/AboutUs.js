import React from 'react';

const AboutUs = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-4 md:mx-10 my-7'>
      <div className='flex justify-center lg:justify-start'>
        <img className='w-full ' src='https://luxus.wplistingthemes.com/wp-content/uploads/2022/01/Gallery.webp' alt='Gallery' />
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='text-4xl font-bold text-center lg:text-left font-serif'>About Us</h1>
        <h2 className='text-2xl font-bold mt-3 text-center lg:text-left'>Grow your Real Estate business with Luxus.</h2>
        <p className='text-xl mt-3 text-justify'>
          Mauris id tincidunt urna. Donec nibh neque, luctus vel sem vitae, aliquet gravida nisi. Nam scelerisque molestie velit at pretium. Aliquam porta condimentum ex, eu ullamcorper enim molestie sit amet. Fusce bibendum quis nibh ac porttitor.
        </p>
        <p className='text-xl mt-3 text-justify'>
          Mauris id tincidunt urna. Donec nibh neque, luctus vel sem vitae, aliquet gravida nisi. Nam scelerisque molestie velit at pretium. Aliquam porta condimentum ex, eu ullamcorper enim molestie sit amet. Fusce bibendum quis nibh ac porttitor.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='flex items-center'>
            <img className='w-28 h-28 mr-4' src='https://static.vecteezy.com/system/resources/previews/025/637/978/original/simple-registration-icon-the-icon-can-be-used-for-websites-print-templates-presentation-templates-illustrations-etc-free-vector.jpg' alt='Registration' />
            <div>
              <h3 className='font-bold text-xl'>Easier to Register</h3>
              <p>Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus ac turpis.</p>
            </div>
          </div>
          <div className='flex items-center mt-8 md:mt-0'>
            <img className='w-24 h-20 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoSwYBFplLpAKOYzk6Vsn4N9AOnKeKcmR2w&s" alt='Listing' />
            <div>
              <h3 className='font-bold text-xl'>Get Your Listings Promoted</h3>
              <p>Lectus magna fringilla urna porttitor rhoncus dolor purus. Nunc lobortis mattis aliquam faucibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
