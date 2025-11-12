import React from 'react';
import phone from '../assets/phone.jpg';
import chair from '../assets/chair.jpg';
import controller from '../assets/controller.jpg';
import watch from '../assets/watch.jpg';
import tshirt from '../assets/t-shirt.jpg';
import shoe from '../assets/shoe.jpg';
import ring from '../assets/ring.jpg';
import purse from '../assets/purse.jpg';
import Carousel from "react-multi-carousel";

function FeaturedCategory(props) {

    const carouselItems = [
        {title:"Smart Tablet", image:phone},
        {title:"Chair", image:chair},
        {title:"Watches", image:watch},
        {title:"Purse", image:purse},
        {title:"Rolling Diamond", image:ring},
        {title:"Sneaker Shoes", image:shoe},
        {title:"XBox Controller", image:controller},
        {title:"Crepe T-Shirt", image:tshirt},
    ]
    const responsive={
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7, slidesToSlide:1  },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 5,  slidesToSlide:1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 3, slidesToSlide:1 },
    }

    return (
        <div className={`bg-transparent`}>
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform .5s cubic-bezier(0.77, 0, 0.175, 1)"
                transitionDuration={800}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="carousel-item overflow-hidden bg-transparent py-10">
                        <div  className={`w-35 h-35 bg-no-repeat bg-cover bg-center mx-auto mb-2 cursor-pointer hover:scale-110 z-10  transition-transform duration-1300 ease-in-out`} style={{backgroundImage: `url(${item.image})`}}></div>
                        <p className={`text-text font-semibold text-xs text-center`}>{item.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default FeaturedCategory;