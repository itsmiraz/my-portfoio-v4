import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "@/lib/motion";

const AboutMe = () => {
  const AboutMeConstans = [
      {
        "title": "Who I Am",
        "desc": "I'm Miraj Hossen, a passionate full-stack developer from Bangladesh. At 21x years old, I thrive on coding, creativity, and innovation in web development."
      },
      {
        "title": "What I Do",
        "desc": "I build seamless, user-friendly web applications, handling both front-end and back-end development. I enjoy solving complex problems and bringing ideas to life."
      },
      {
        "title": "My Journey",
        "desc": "My coding journey began as a teenager, evolving into a passion for continuous learning and development. I've worked on diverse projects, sharpening my skills along the way."
      },
      {
        "title": "My Goal",
        "desc": "I aim to make an impact in web development, contribute to innovative projects, and inspire future developers, pushing technology’s boundaries."
      }
    
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
    <div className="max-w-[320px] lg:max-w-[490px] z-30   pt-2 pb-6 px-6 lg:px-6 rounded w-full bg-[#010f161f]  border-2 border-opacity-30 border-gray-700">
      <h2 className="Secordary-Title">{data.title} </h2>
      <p className=" text-gray-200 pt-4">
        {data.desc}
      </p>
    </div>
  );
};
