import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard"; // Import the reusable TestimonialCard component

type Testimonial = {
  image: string;
  content: string;
  name: string;
  position: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false, // No looping
    speed: 500,
    arrows: false,
    slidesToShow: 4,
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
    <section className="flex flex-col items-center bg-white max-md:px-5 max-md:max-w-full mb-10  py-2 md:py-4 px-6 md:px-16 lg:px-32 w-full overflow-hidden">
      <div className="flex flex-col items-center max-w-full text-center w-[684px]">
        <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-[2px]">
          Testimonials
        </h2>
        <p className="mt-5 text-5xl font-bold leading-none text-neutral-800 max-md:max-w-full max-md:text-4xl">
          The Trust From Clients
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-1 items-start mt-10 max-w-full w-[1278px] pr-6">
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
              currentIndex < testimonials.length - 3
            ) {
              sliderRef.current.slickNext();
            }
          }}
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slider container */}
      <div className="w-full mt-12 max-md:mt-10 max-md:max-w-full">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                isHighlighted={index === 2} // Highlight the third card if needed
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
