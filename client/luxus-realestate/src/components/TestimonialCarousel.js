import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    image: "https://images.squarespace-cdn.com/content/v1/590beb9b893fc0ef1a3523e3/1658676352637-1K6JK547ZU2L928STUKM/Maria-21-Edit.jpg",
    quote: "This platform has completely changed the way I manage my properties. The user interface is intuitive, and the customer service is outstanding."
  },
  {
    name: "Jane Smith",
    role: "Homeowner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXpJnWxwulNj2zt36rqu3a3Nv3aZHFztMMA&s",
    quote: "I've been using this site for a few months now, and it has been a game-changer. Finding the right tenants has never been easier."
  },
  {
    name: "Michael Brown",
    role: "Renter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vEN9Z_QGTh2UPofJZvTq0l0CdzEJ3L887g&s",
    quote: "As a renter, I found the search functionality incredibly useful. The filters helped me find the perfect home within my budget."
  },
  {
    name: "Emily Johnson",
    role: "Landlord",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzGX6UT65_NF-MV2L2mbo1POmAy311WMM0Q&s",
    quote: "The property management features have saved me so much time. I can easily track rent payments and communicate with tenants."
  },
  {
    name: "David Lee",
    role: "Real Estate Agent",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s",
    quote: "The site is a fantastic tool for real estate agents. It makes listing properties and managing client inquiries straightforward and efficient."
  },
  {
    name: "Sarah Wilson",
    role: "Investor",
    image: "https://i.imgur.com/UXpnCe7.jpg",
    quote: "I appreciate the detailed analytics and insights. It helps me make informed decisions about my investment properties."
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-16">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-center">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">{testimonial.role}</p>
              <p className="text-sm text-gray-700 text-center">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
