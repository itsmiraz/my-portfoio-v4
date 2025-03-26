/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import heroimg from "../../../public/Assets/miraj-hero-omg.webp";
import blueBgOverlay from "../../../public/Assets/blue-background-overlay.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "@/lib/motion";
import TextTransition, { presets } from "react-text-transition";
import BlueGlow from "../../../public/Assets/svgs/bliue.png";
import TintGLow from "../../../public/Assets/svgs/tint.png";
const Hero = () => {
  const TEXTS = ["FRONT", "BACK"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
    <section
      id="home"
      ref={sectionRef}
      className="relative flex px-20 items-center  mt-6 py-40  lg:mt-10 z-30"
    >
      <div className="text-white">
        <h4 className="text-[36px] fira_code_font">Hi there;</h4>
        <h1 className="text-[64px] fira_code_font font-semibold">I am Miraj</h1>
        <p className="text-[30px] fira_code_font">
          I build fast, user-friendly websites <br />
          and web apps. Whether you're looking <br />
          for a developer to join your team or <br /> need a project built
        </p>
      </div>
      <div className="relative w-[50%]">
        <Image
          src={BlueGlow}
          className="absolute -top-[400px] animate-glow"
          alt=""
        />
        <Image
          src={TintGLow}
          className="absolute rotate-45 -top-[300px] animate-glow-alt"
          alt="t"
        />
      </div>
    </section>
  );
};

export default Hero;

// <div className='absolute z-30 w-full h-full' >
// <motion.h2
//     initial='initial'
//     animate={animate ? 'animate' : 'initial'}
//     exit='exit'
//     variants={slideAnimation('left')}
//     className='heroTitle  absolute left-[10%] lg:left-[20%]  top-[30%]'><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></motion.h2>
// <motion.h2
//     initial='initial'
//     animate={animate ? 'animate' : 'initial'}
//     exit='exit'
//     variants={slideAnimation('left')}
//     className=' heroTitle absolute right-[12%] lg:right-[17%] top-[50%] lg:top-[35%]'>-END</motion.h2>
// <motion.h2
//     initial='initial'
//     animate={animate ? 'animate' : 'initial'}
//     exit='exit'
//     variants={slideAnimation('right')}
//     className='heroTitle absolute right-[10%]  lg:right-[15%] bottom-10 md:bottom-20 lg:bottom-40'>DEVELOPER</motion.h2>
// <motion.div
//     initial='initial'
//     animate={animate ? 'animate' : 'initial'}
//     exit='exit'
//     variants={slideAnimation('down')}>
//     <Image lazy='false' loading='eager' className='absolute  right-[30%] top-4 lg:top-20 lg:w-[25%] w-[40%]' src={heroimg} alt='miraj-hossen' ></Image>
// </motion.div>
// </div>

// <motion.div
// initial='initial'
// animate={animate ? 'animate' : 'initial'}
// exit='exit'
// variants={slideAnimation('down')}>
// <Image lazy='false' loading='eager' className='mx-auto p-3 lg:p-10' src={blueBgOverlay} alt='blue-bg-overlay-miraj-hossen' />
// </motion.div>
