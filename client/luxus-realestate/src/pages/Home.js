import React from 'react'
import Navbar from '../components/Navbar'
import "../index.css"
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs'
import HomePageListings from '../components/HomePageListings'
import OurProcess from '../components/OurProcess'
import SellProperty from '../components/SellProperty'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {

  const properties = [
    {
      image: 'https://www.svgrepo.com/show/130672/subscribe.svg' ,
      title: 'Signup & Subscribe',
      description: 'Join our community by signing up and subscribing to our newsletter.',
      tag1: 'For Sale',
      tag2: '3 Beds',
      postedBy: 'John Doe'
    },
    {
      image: 'https://www.svgrepo.com/show/307877/home-buyer-real-estate-listing-buy-real-estate-property-investor.svg',
      title: 'Explore Listings',
      description: 'Dive into our extensive collection of properties and find your perfect match.',
      tag1: 'For Rent',
      tag2: '2 Beds',
      postedBy: 'Jane Smith'
    },
    {
      image: 'https://www.svgrepo.com/show/301740/listing-list.svg',
      title: 'Submit Listings',
      description: 'Get your property noticed by thousands of users and connect with interested parties quickly.',
      tag1: 'For Sale',
      tag2: '4 Beds',
      postedBy: 'Alice Johnson'
    }
  ];

  const listing = [
    {
      bedrooms: 3,
      bathrooms: 2,
      parking: 1
    },
    {
      bedrooms: 5,
      bathrooms: 4,
      parking: 2
    },
    {
      bedrooms: 3,
      bathrooms: 2,
      parking: 1
    },
    {
      bedrooms: 7,
      bathrooms: 5,
      parking: 3
    },
    {
      bedrooms: 1,
      bathrooms: 1,
      parking: 1
    },
    {
      bedrooms: 4,
      bathrooms: 3,
      parking: 2
    }
  ]

  return (
    <>
      <Navbar />
      <Slider />
      <AboutUs />
      <HomePageListings listing={listing} />
      <OurProcess properties={properties} />
      <SellProperty />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home
