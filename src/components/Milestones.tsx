import React from "react";

type Milestone = {
  value: string;
  description: string;
};

type MilestonesProps = {
  milestones: Milestone[];
};

const Milestones: React.FC<MilestonesProps> = ({ milestones }) => {
  return (
    <section className="flex flex-col items-center mt-10 pt-16 w-full bg-blue-600 pb-40 max-md:pb-16 max-md:px-4 py-2 md:py-4 px-6 md:px-16 lg:px-32 overflow-hidden ">
      <h2 className="text-xl font-semibold text-indigo-50 uppercase tracking-[2px] mb-4">
        Our Milestones
      </h2>
      <p className="mt-4 text-5xl font-bold text-center text-white leading-[50px] w-[684px] max-md:w-full max-md:text-3xl max-md:leading-tight">
        What sets our studio apart for your projects?
      </p>
      <div className="flex flex-wrap gap-4 justify-center items-start py-12 mt-8 w-full max-w-7xl text-center max-md:mt-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-8 px-6 bg-white rounded-2xl shadow-md min-w-[240px] w-[297px] transition-all duration-300 hover:scale-105 max-md:w-full max-md:min-w-0"
          >
            <div className="text-5xl font-bold text-blue-600 leading-none max-md:text-3xl">
              {milestone.value}
            </div>
            <div className="mt-4 text-lg font-semibold text-zinc-800 max-md:text-base">
              {milestone.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
