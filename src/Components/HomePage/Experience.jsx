import React from 'react';
import line from '../../../public/Assets/line.webp'
import { ExperienceData } from '@/Constants/Constants';
import Image from 'next/image';


const Experience = () => {
    return (
        <div id='experience' className='px-6 lg:px-32 py-20'>
            <h2 className='head-text'>Experience</h2>
            <div className='flex md:flex-row flex-col gap-12 md:gap-0 mt-14'>
                {
                    ExperienceData.map((data, i) => <div className='flex justify-center items-center ' key={i}>
                        <Image className='w-[120px] h-full rotate-90 block md:hidden' src={line} alt='proogress-line' />
                        <div className='text-white w-full text-start'>
                        <p className='text-sm  '>{data.duration}</p>
                        <Image className='py-2 md:block hidden ' src={line} alt='proogress-line' />
                        <h2 className='text-xl md:text-2xl '>{data.jobTitle}</h2>
                        <h3 className='text-[14px] md:text-[16px]'>{data.company}</h3>
                        <p className='text-xs'>{data.location}</p>
                       </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Experience;