import React from 'react';
import line from '../../../public/Assets/line.webp'
import { ExperienceData } from '@/Constants/Constants';
import Image from 'next/image';


const Experience = () => {
    return (
        <div className='px-32 py-20'>
            <h2 className='head-text'>Experience</h2>
            <div className='flex mt-14'>
                {
                    ExperienceData.map((data, i) => <div className='text-white text-start ' key={i}>
                        <p className='text-sm'>{ data.duration}</p>
                        <Image className='py-2' src={line} alt='proogress-line' />
                        <h2 className='text-2xl'>{ data.jobTitle}</h2>
                        <h3 className='text-[16px]'>{ data.company}</h3>
                        <p className='text-xs'>{ data.location}</p>
                    </div>)
                }
</div>
        </div>
    );
};

export default Experience;