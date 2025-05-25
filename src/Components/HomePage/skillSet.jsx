import {
  Auth,
  AuthTech,
  BackedEndTechs,
  DevOps,
  FrontEndTechs,
  ToolsConstant,
  aws,
  othersTech,
  programming_languages,
} from "@/Constants/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSet = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.2, // Adjust this threshold as needed
  });

  // State to control whether animations should play
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div id="skills" className="px-6 lg:px-32 py-20">
      <h2 className="head-text">Skill - Set</h2>
      <div
        ref={sectionRef}
        className="w-full mt-10 grid-cols-1 md:grid-cols-2 grid gap-20"
      >
        <div>
          <h3 className="subtitle">PROGRAMMING LANGUAGES</h3>
          <div className="flex gap-4 flex-wrap">
            {programming_languages.map((tech, i) => (
              <SkillCard i={i} animate={animate} key={i} data={tech} />
            ))}
          </div>
          <h3 className="subtitle mt-6">FRONT END</h3>
          <div className="flex gap-4 flex-wrap">
            {FrontEndTechs.map((tech, i) => (
              <SkillCard i={i} animate={animate} key={i} data={tech} />
            ))}
          </div>

          <div className="flex mt-8 gap-5">
            <div className="w-full">
              <h3 className="subtitle">AMAZON WEB SERVICES</h3>
              <div className="flex gap-4 flex-wrap">
                {aws.map((tech, i) => (
                  <SkillCard i={i} animate={animate} key={i} data={tech} />
                ))}
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="subtitle">BACK END</h3>
            <div className="flex gap-4 flex-wrap">
              {BackedEndTechs.map((tech, i) => (
                <SkillCard i={i} animate={animate} key={i} data={tech} />
              ))}
            </div>
          </div>
          <div className="w-full mt-8">
            <h3 className="subtitle">TOOLS</h3>
            <div className="flex gap-4 flex-wrap">
              {ToolsConstant.map((tech, i) => (
                <SkillCard i={i} animate={animate} key={i} data={tech} />
              ))}
            </div>
          </div>
          <div className="w-full mt-8">
            <h3 className="subtitle">DEV OPS</h3>
            <div className="flex gap-4 flex-wrap">
              {DevOps.map((tech, i) => (
                <SkillCard i={i} animate={animate} key={i} data={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
const SkillCard = ({ data }) => {
  return (
    <div
      className="relative cursor-pointer py-1 px-2 pr-4 bg-[#002D3E] min-w-[170px] items-center rounded-full text-white font-medium gap-4 w-fit flex overflow-hidden group"
    >
      {/* Shiny Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                     scale-150 rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] 
                     transition-transform duration-500 ease-in-out"></div>

      {/* Image */}
      <div className=" h-[30px] md:h-[50px]  w-[30px] md:w-[50px] rounded-full overflow-hidden">
        <Image src={data.img} className="object-cover w-full h-full" alt="miraj-skill" />
      </div>

      {/* Skill Name */}
      <p className="text-sm md:text-lg">{data.name}</p>
    </div>
  );
};
