import React from "react";
import line from "../../../public/Assets/line.webp";
import { ExperienceData } from "@/Constants/Constants";
import Image from "next/image";
import DotLine from '../../../public/Assets/icons/dotLine.svg'
const Experience = () => {
  return (
    <div id="experience" className="px-6 lg:px-32 py-20">
      <h2 className="head-text">Experience</h2>
      <p className="text-white pt-2 font-medium">
      Proven track record of delivering impactful solutions.
      </p>
      <div className="flex md:flex-row flex-col  md:gap-0 mt-14">
        {ExperienceData.map((data, i) => (
          <div className="flex justify-center items-center " key={i}>
           <div className="block md:hidden">
            <DotLine/>
           </div>
            {/* <Image
              className="w-[120px] h-full rotate-90 "
              src={line}
              alt="proogress-line"
            /> */}
            <div className="text-white pl-4 w-full text-start">
              <p className="text-sm  ">{data.duration}</p>
              <Image
                className="py-2   md:block hidden "
                src={line}
                alt="proogress-line"
              />
              <h2 className="text-2xl py-2">{data.jobTitle}</h2>
              <h3 className="text-[16px]">{data.company}</h3>
              <p className="text-xs pt-1">{data.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
