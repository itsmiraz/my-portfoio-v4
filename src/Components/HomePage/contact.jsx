import React, { useEffect, useState } from 'react';
import blueCoverOverlyy from '../../../public/Assets/blue-background-overlay.webp'
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import { SocailMediaData } from '@/Constants/Constants';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';


const Contact = () => {







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
        <div ref={sectionRef} className='flex pt-40  relative justify-center items-center'>
            <motion.div

                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('up')}
                className='max-w-[1200px] mx-auto bg-[#05070e5d] backdrop-blur-md relative z-20 p-10 border-[#FFFFFF] border-opacity-10 border rounded-md grid grid-cols-2 gap-6'>
                <div className=''>
                    <h2 className='head-text'>Contact Me</h2>
                    <p className='small-text mt-4'>
                        <Balancer>
                            Feel free to send me any message about me or wanna hire me or need any help in your project. I will reply you as soon as possible. Please enter a valid emal so that I can contact you.
                        </Balancer>
                    </p>
                    <div className='mt-6'>
                        <p className='subtitle'>Social</p>
                        <div className='flex gap-x-5'>
                            {SocailMediaData.map((data, i) => <div key={i}><Link target='_blank' rel="noopener noreferrer" href={data.url}><Image src={data.icon} className='max-w-[30px]' alt={data.ref} /></Link></div>)}
                        </div>
                    </div>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex w-full gap-x-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='small-text pb-2'>Name</label>

                            <input
                                type="text"
                                className='bg-[#011527] outline-none text-white w-full opacity-50 p-2 rounded'
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className='small-text pb-2'>Email</label>

                            <input
                                type="text"
                                className='bg-[#011527] w-full  outline-none text-white opacity-50 p-2 rounded'
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="message" className='small-text pb-2'>Message</label>
                        <textarea
                            className='w-full h-24 outline-none  text-white opacity-50 p-2 rounded bg-[#011527] '
                            name=""
                            id=""
                        ></textarea>
                    </div>
                    <button className='bg-[#0065C2] text-white px-3 py-1 rounded mt-4'>Submit</button>
                </div>
            </motion.div>
            <Image className='absolute' src={blueCoverOverlyy} alt='blue-overlay' />
        </div>
    );
};

export default Contact;