import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

type Props = {
  skills: string[];
};

const SkillTabs: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex flex-col mt-4 w-full">
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="flex flex-wrap gap-2 md:gap-6 items-center max-md:flex-col">
          <TabsTrigger
            value="skills"
            className=" flex  px-6 rounded-full hover:bg-blue-600 hover:text-white shadow-xl border-2 border-gray-200  transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Main Skills
          </TabsTrigger>
          <TabsTrigger
            value="awards"
            className=" flex  px-6 rounded-full hover:bg-blue-600 hover:text-white shadow-xl border-2 border-gray-200  transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Awards
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className=" flex  px-6 rounded-full hover:bg-blue-600 hover:text-white shadow-xl border-2 border-gray-50  transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Education
          </TabsTrigger>
        </TabsList>

        {/* Tab Content for Main Skills */}
        <TabsContent value="skills" className="flex flex-wrap md:mt-12">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md w-full max-w-[300px] transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-2">
                {/* <img
                  src={item.icon}
                  alt={`${name} icon`}
                  className="w-8 h-8 mr-2"
                /> */}
                {/* <div className="w-8 h-8 mr-2">{item.icon}</div> */}
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.skill}
                </h4>
              </div>
              <Progress
                value={item.percentage}
                className="h-1 rounded-full w-full max-w-[300px]"
              />
              <span className="mt-1 text-sm text-gray-600">
                {item.percentage}%
              </span>
            </div>
          ))}
          {/* {skills.map((item, index) => (
            <div key={index} className="mt-6 w-full flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.skill}
              </h3>
              <Progress
                value={item.percentage}
                className="h-1 rounded-full w-full max-w-[300px]"
              />
            </div>
            
          ))} */}
        </TabsContent>

        {/* Tab Content for Awards */}
        <TabsContent value="awards" className="md:mt-12">
          <h3 className="text-lg font-semibold text-gray-800">
            Here are the awards.
          </h3>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Award 1</li>
            <li>Award 2</li>
            <li>Award 3</li>
          </ul>
        </TabsContent>

        {/* Tab Content for Education */}
        <TabsContent value="education" className="md:mt-12">
          <h3 className="text-lg font-semibold text-gray-800">
            Education History
          </h3>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>University of X - Bachelor's Degree</li>
            <li>University of Y - Master's Degree</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillTabs;
