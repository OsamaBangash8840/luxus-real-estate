import React, { useState } from 'react'
import Categories from '../components/Categories'

const Slider = () => {
    const [search, setSearch] = useState('')
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade object-fit-contain " style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" >
                    <div className='carousel-caption' style={{ zIndex: "9" }}>
                        <div className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active  " id='carouselImg'>
                        <img src="http://tlcrealestate.mmpcaringbah.com.au/wp-content/uploads/2021/09/home-hero-bg-1.webp" className="d-block h-[600px] w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block ">
                            <h5 className='font-bold text-2xl mb-[40px]' >Featured Products</h5>
                            <p className='mb-[200px] text-lg font-thin'>Discover our curated selection of top-notch products, handpicked to elevate your shopping experience. From trending gadgets to stylish apparel, find the perfect items to meet your needs and desires.</p>
                        </div>
                    </div>
                    <div className="carousel-item" id='carouselImg'>
                        <img src="http://tlcrealestate.mmpcaringbah.com.au/wp-content/uploads/2021/10/I-am-Buyer.webp" className="d-block h-[600px] w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='font-bold text-2xl mb-[40px]' >Seasonal Specials</h5>
                            <p className='mb-[200px] text-lg font-thin '>Explore our seasonal specials collection, where you'll find exclusive deals and limited-time offers on a variety of products. Don't miss out on the chance to snag incredible savings on must-have items for every season.</p>
                        </div>
                    </div>
                    <div className="carousel-item" id='carouselImg'>
                        <img src="http://tlcrealestate.mmpcaringbah.com.au/wp-content/uploads/2021/11/Contactusbg-1.jpg" className="d-block h-[600px] w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='font-bold text-2xl mb-[40px]' >Trending Picks</h5>
                            <p className='mb-[200px] text-lg font-thin'>Stay ahead of the curve with our trending picks selection, showcasing the latest and most popular products in the market. Whether it's fashion, electronics, or home essentials, shop with confidence knowing you're getting the hottest items of the moment.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Categories/>
        </>
    )
}

export default Slider