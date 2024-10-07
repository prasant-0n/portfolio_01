import React from "react";
import { Progress } from "./ui/progress";
import SkillTabs from "./skillTabs";

type AboutMeProps = {
  // image: string;
  name: string;
  experience: number;
  description: string;
  skills: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({
  // image,
  name,
  experience,
  description,
  skills,
}) => {
  return (
    <section className="flex flex-wrap gap-10 items-center min-h-[727px] max-md:px-5 max-md:max-w-full  py-2 md:py-4 px-6 md:px-16 lg:px-32 w-full transition-all duration-300 ">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:w-6/12 w-full">
          <img
            loading="lazy"
            src="/src/assets/20230724_192751.jpg"
            alt={`${name} portrait`}
            className="object-cover w-full aspect-square rounded-full"
          />
        </div>
        <div className="flex flex-col md:w-6/12 w-full">
          <div className="flex flex-wrap items-start">
            <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-wider">
              About Me
            </h2>
            <div className="mt-4 text-4xl font-bold md:text-5xl">
              <span className="text-blue-600">{experience} Years</span>
              <br /> of Product Design Experience
            </div>
            <p className="mt-6 text-lg leading-7 text-gray-700">
              Hello there! I'm{" "}
              <span className="font-bold text-gray-800">{name}</span>.{" "}
              {description}
            </p>
          </div>
          <SkillTabs skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
