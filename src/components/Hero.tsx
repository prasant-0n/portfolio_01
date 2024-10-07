/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

type HeroProps = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ name, title, description, image }) => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-wrap gap-10 items-center min-h-[727px] max-md:px-5 max-md:max-w-full  py-2 md:py-4 px-6 md:px-16 lg:px-32 w-full bg-white shadow-md transition-all duration-300 ">
      <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[513px] max-md:max-w-full">
        <div className="flex flex-col max-w-full text-2xl text-neutral-800 w-[544px]">
          <h1 className="font-semibold max-md:max-w-full">
            Welcome to my Portfolio
          </h1>
          <div className="mt-2.5 text-6xl font-bold leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Hi I'm <br />
            <span className="text-7xl text-blue-600">{name}</span> <br />
            {title}
          </div>
          <p className="mt-2.5 leading-9 max-md:max-w-full">{description}</p>
        </div>
        <div className="flex flex-wrap gap-10 mt-12 max-w-full text-xl font-semibold rounded-[50px] w-[447px] max-md:mt-10">
          {/* Hire Me Button */}
          <button className="text-white bg-blue-600 text-base flex gap-4 justify-center items-center px-8 py-3.5 border-2 border-solid border-blue-600 min-h-[50px] rounded-full max-md:px-5 shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-700 hover:border-blue-700 hover:shadow-2xl transform hover:scale-105">
            Hire Me!
          </button>

          {/* Download CV Button */}
          <button className="flex gap-4 justify-center text-base items-center px-8 py-3.5 text-blue-600 bg-white border-2 border-blue-600 border-solid min-h-[50px] rounded-full max-md:px-5 shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-50 hover:border-blue-600 hover:shadow-2xl transform hover:scale-105">
            <span className="self-stretch my-auto">Download CV</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a455d44626966c389ef7e9d6322eec11efcf6cc9803130b891dd7d41937c7a34?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
              alt="Download Icon"
              className="object-contain shrink-0 w-5 aspect-square"
            />
          </button>
        </div>
      </div>
      <img
        loading="lazy"
        src="/public/20230724_192751-removebg-preview.png"
        // src="/src/assets/20230724_192751.jpg"
        // src={image}
        alt={`${name} portrait`}
        className="object-contain grow shrink self-stretch my-auto aspect-[0.99] min-w-[240px] w-[442px] max-md:max-w-full"
      />
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
