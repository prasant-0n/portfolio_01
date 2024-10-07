import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./serviceCard";
type Service = {
  icon: string;
  title: string;
  description: string;
};

type ServicesProps = {
  services: Service[];
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false, // No looping
    speed: 500,
    arrows: false,
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
    <section className="bg-gray-100 max-md:px-5 max-md:max-w-full py-2 md:py-4 px-6 md:px-16 lg:px-32 w-full overflow-hidden mt-20">
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

        <div className="flex flex-wrap justify-center md:justify-end  gap-2 items-start mt-10 max-w-full w-[1278px] pr-6">
          <button
            className="flex justify-center items-center bg-white border-blue-500 border-solid border-[1px] h-[50px] min-h-[50px] rotate-[-3.1415925661670165rad] rounded-full w-[50px] shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-100 hover:scale-105 hover:border-blue-600"
            onClick={() => {
              const currentIndex =
                sliderRef.current?.innerSlider?.state.currentSlide;
              // Check if we can go to the left
              if (currentIndex !== undefined && currentIndex > 0) {
                sliderRef.current.slickPrev();
              }
            }}
          >
            <ArrowRight className="w-6 h-6 text-blue-500" />
          </button>

          <button
            className="flex justify-center items-center bg-blue-600 border-2 shadow-xl h-[50px] min-h-[50px] rounded-full w-[50px] transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:border-blue-700"
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

        <div className="relative px-4 mt-10">
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
};

export default Services;
