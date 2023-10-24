
import React, { useEffect, useState } from 'react';
import heroimg from '../../../public/Assets/miraj-hero-omg.webp'
import blueBgOverlay from '../../../public/Assets/blue-background-overlay.webp'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';


const Hero = () => {


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
        <section id='home' ref={sectionRef} className='relative overflow-hidden z-30'>

            <div className='absolute  w-full h-full' >
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className='text-white text-[96px]  absolute left-[20%] z-10 top-[30%] font-semibold'>FRONT</motion.h2>
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className='text-white text-[96px] absolute right-[17%] z-10 top-[35%]  font-semibold'>-END</motion.h2>
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}
                    className='text-white absolute right-[15%] z-10 bottom-40 text-[96px] font-semibold'>DEVELOPER</motion.h2>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('down')}>
                    <Image className='absolute right-[30%] top-20' src={heroimg} alt='miraj-hossen' ></Image>
                </motion.div>
            </div>

            <Image className='mx-auto p-10' src={blueBgOverlay} alt='blue-bg-overlay-miraj-hossen' />
        </section>
    );
};

export default Hero;