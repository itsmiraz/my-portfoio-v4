import React from 'react';
import heroimg from '../../../public/Assets/miraj-hero-omg.webp'
import blueBgOverlay from '../../../public/Assets/blue-background-overlay.webp'
import Image from 'next/image';


const Hero = () => {
    return (
        <div className='relative overflow-hidden z-30'>

            <div className='absolute  w-full h-full' >
                <h2 className='text-white text-[96px]  absolute left-[20%] z-10 top-[30%] font-semibold'>FRONT</h2>
                <h2 className='text-white text-[96px] absolute right-[17%] z-10 top-[35%]  font-semibold'>-END</h2>
                <h2 className='text-white absolute right-[15%] z-10 bottom-40 text-[96px] font-semibold'>DEVELOPER</h2>
                <Image className='absolute right-[30%] top-20' src={heroimg} alt='miraj-hossen' />
            </div>

            <Image className='mx-auto p-10' src={blueBgOverlay} alt='blue-bg-overlay-miraj-hossen' />
        </div>
    );
};

export default Hero;