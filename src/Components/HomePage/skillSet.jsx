import { Auth, AuthTech, BackedEndTechs, DevOps, FrontEndTechs, ToolsConstant, othersTech } from '@/Constants/Constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
        <div id='skills' className='px-6 lg:px-32 py-20'>
            <h2 className='head-text'>Skill - Set</h2>
            <div ref={sectionRef} className='w-full mt-10 grid-cols-1 md:grid-cols-2 grid gap-20'>
                <div>
                    <h3 className='subtitle'>FRONT END</h3>
                    <div className='grid gap-5 grid-cols-5'>
                        {
                            FrontEndTechs.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                        }
                    </div>


                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <h3 className='subtitle'>AUTHENTICATION and OTHERS</h3>
                            <div className='grid w-full gap-5 grid-cols-5'>
                                {
                                    AuthTech.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                                }
                                {
                                    othersTech.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                                }
                            </div>
                        </div>
                    </div>




                </div>
                <div>
                    <div>
                        <h3 className='subtitle'>BACK END</h3>
                        <div className='grid gap-5 grid-cols-5'>
                            {
                                BackedEndTechs.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                            }
                        </div>

                    </div>
                    <div className='w-full'>
                        <h3 className='subtitle'>TOOLS</h3>
                        <div className='grid w-full gap-5 grid-cols-5'>
                            {
                                ToolsConstant.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='subtitle'>DEV OPS</h3>
                        <div className='grid w-full gap-5 grid-cols-5'>
                            {
                                DevOps.map((tech, i) => <SkillCard i={i} animate={animate} key={i} data={tech} />)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillSet;

const SkillCard = ({ data, animate, i }) => {

    return <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : -100 }}
        transition={{ duration: 0.3, delay: i * 0.4 }}

        className='w-full'>
        <Link href={data.url}>
            <Image src={data.img} alt='miraj-skill' />

        </Link>
    </motion.div>
}