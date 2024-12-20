import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "@/lib/motion";

const AboutMe = () => {
  const AboutMeConstans = [
    {
      title: "Who I am",
      desc: "Hello, I`m Miraj Hossen, a passionate and innovative full-stack developer based in Bangladesh. At just 21x years old, I`ve already embarked on an exciting journey in the world of web development. I`m driven by my love for coding, creativity, and the ever-evolving tech landscape.",
    },
    {
      title: "What I Do",
      desc: "As a full-stack developer, I thrive in both front-end and back-end development, crafting seamless and user-friendly web applications. My toolbox includes a range of technologies and programming languages, and I relish the opportunity to tackle complex problems and turn ideas into robust, interactive digital experiences. ",
    },
    {
      title: "My Journey",
      desc: "My journey in the tech industry began at an early age, and it has been a fascinating adventure filled with continuous learning and growth. I started my coding journey as a teenager, and my passion for development has only intensified with time. I`ve dedicated countless hours to honing my skills, working on personal and collaborative projects.",
    },
    {
      title: "My Goal",
      desc: "Looking ahead, my goal is to make a meaningful impact in the world of web development. I aspire to contribute to innovative projects, create user-centric applications, and engage in collaborations that push the boundaries of technology. My ultimate aim is to become a respected figure in the tech community and inspire the next generation of developers from Bangladesh and beyond.",
    },
  ];

  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to control whether animations should play
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <section
      id="about"
      className="pb-20 pt-32 pl-6 pr-6 lg:pl-32 overflow-hidden relative"
    >
      <div>
        <motion.div
          initial="initial"
          animate={animate ? "animate" : "initial"}
          exit="exit"
          variants={slideAnimation("up")}
        >
          <h2 className="head-text">About Me</h2>
          <p className="subtitle">
            Hey there, I`m Miraj Hossen, a passionate Full Stack Developer{" "}
            <br className="md:block hidden" />
            with a strong love for all things code and technology.
          </p>
        </motion.div>

        <div ref={sectionRef} className="relative md:pl-10 pl-0  pt-10 w-full">
          <motion.div
            initial="initial"
            animate={animate ? "animate" : "initial"}
            exit="exit"
            variants={slideAnimation("left")}
            className="pt-6   relative z-30 flex flex-wrap gap-8 lg:gap-14"
          >
            {AboutMeConstans.slice(0, 2).map((data, i) => (
              <AboutMeCard data={data} key={i} />
            ))}
          </motion.div>
          <motion.div
            initial="initial"
            animate={animate ? "animate" : "initial"}
            exit="exit"
            variants={slideAnimation("right")}
            className="pt-8 relative z-30 lg:pt-12 lg:pl-10 flex flex-wrap gap-8 lg:gap-14"
          >
            {AboutMeConstans.slice(2, 4).map((data, i) => (
              <AboutMeCard data={data} key={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

const AboutMeCard = ({ data }) => {
  return (
    <div className="max-w-[320px] lg:max-w-[490px] z-30   pt-4 pb-6 px-6 lg:px-12 rounded w-full bg-[#010f161f]  border-2 border-opacity-30 border-gray-700">
      <h2 className="Secordary-Title">{data.title} </h2>
      <p className="small-text py-2 ">
        {data.desc}
      </p>
    </div>
  );
};
