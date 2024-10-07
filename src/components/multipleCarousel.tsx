import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./serviceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Website / App Design UX / UI Design",
      description:
        "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
      title: "Strategic Marketing and Creative Content",
      description:
        "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      ),
      title: "Multivendor eCommerce Website Solutions",
      description: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "Custom Web Development and API Integration",
      description:
        "Developing Custom Web Solutions and Seamless API Integrations",
    },
  ];
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false, // No looping
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center px-20 max-w-full text-neutral-800 w-[1278px] max-md:px-5">
          <div className="text-xl font-semibold text-blue-600 uppercase tracking-[2px]">
            Services
          </div>
          <div className="mt-4 text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
            Exploring My Design <span className="text-blue-600">Skills</span>
          </div>
          <div className="mt-4 text-lg leading-6 text-center max-md:max-w-full">
            We transform your ideas into a distinctive web project that both
            inspires you and captivates your customers
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-5 items-start mt-8 max-w-full w-[1278px]">
          <button
            className="flex justify-center items-center bg-white border border-blue-600 border-solid h-[50px] min-h-[50px] rotate-[-3.1415925661670165rad] rounded-[50px] w-[50px]"
            onClick={() => {
              const currentIndex =
                sliderRef.current?.innerSlider?.state.currentSlide;
              // Check if we can go to the left
              if (currentIndex !== undefined && currentIndex > 0) {
                sliderRef.current.slickPrev();
              }
            }}
          >
            <ArrowLeft className="w-6 h-6 text-blue-500" />
          </button>
          <button
            className="flex justify-center items-center bg-blue-600 h-[50px] min-h-[50px] rounded-[50px] w-[50px]"
            onClick={() => {
              const currentIndex =
                sliderRef.current?.innerSlider?.state.currentSlide;
              // Check if we can go to the right
              if (
                currentIndex !== undefined &&
                currentIndex < services.length - 3
              ) {
                sliderRef.current.slickNext();
              }
            }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="relative px-4">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-2">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
