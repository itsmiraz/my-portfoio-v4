
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
        <section id='home' ref={sectionRef} className='relative overflow-hidden mt-6 lg:mt-10 z-30'>

            <div className='absolute z-30 w-full h-full' >
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className=' heroTitle  absolute left-[10%] lg:left-[20%]  top-[30%]'>FRONT</motion.h2>
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className=' heroTitle absolute right-[12%] lg:right-[17%] top-[50%] lg:top-[35%]'>-END</motion.h2>
                <motion.h2
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}
                    className='heroTitle absolute right-[10%]  lg:right-[15%] bottom-10 md:bottom-20 lg:bottom-40'>DEVELOPER</motion.h2>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('down')}>
                    <Image lazy='false' loading='eager' className='absolute  right-[30%] top-4 lg:top-20 lg:w-[25%] w-[40%]' src={heroimg} alt='miraj-hossen' ></Image>
                </motion.div>
            </div>

            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('down')}>
                <Image lazy='false' loading='eager' className='mx-auto p-3 lg:p-10' src={blueBgOverlay} alt='blue-bg-overlay-miraj-hossen' />
            </motion.div>

        </section>
    );
};

export default Hero;