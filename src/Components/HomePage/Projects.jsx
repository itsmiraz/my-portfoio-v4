import { ProjectsData } from '@/Constants/Constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Projects = () => {

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
        <div className='px-32 py-20'>
            <h2 className='head-text'>Works</h2>
            <p className='subtitle'>Here are some of my works. Although I worked in <br /> many projects but these are completely mine.</p>
            <div ref={sectionRef} className='mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ProjectsData.map((data, i) => <ProjectCard animate={animate} i={i} key={i} data={data} />)
                }
            </div>

        </div>
    );
};

export default Projects;



const ProjectCard = ({ data, i, animate }) => {

    const { img, alt, title, desc, liveUrl } = data

    return (
        <motion.div

            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -100 }}
            transition={{ duration: 0.2, delay: i * 0.2 }}
            className='bg-[#000A1A] p-3 rounded-md'>
            <div>
                <Image className='w-full' src={img} alt={alt} />

            </div>

            <div className='p-2 rounded-b-md mt-2 bg-[#021527]'>
                <h2 className='subtitle'>{title}</h2>
                <p className='small-text'>{desc}</p>
                <div>
                    <Link target='_blank' href={liveUrl}>
                        <button className='bg-[#0065C2] text-white px-3 py-1 rounded mt-4'>Check Live</button></Link>
                </div>
            </div>
        </motion.div>
    )
}