import React from 'react';
import heroimg from '../../../public/Assets/miraj-hero-omg.webp'
import blueBgOverlay from '../../../public/Assets/blue-background-overlay.webp'
import Image from 'next/image';


const Hero = () => {
    return (
        <div className='relative overflow-hidden z-40'>

            <div >

            </div>

            <Image className='mx-auto p-10' src={blueBgOverlay} alt='blue-bg-overlay-miraj-hossen'/> 
        </div>
    );
};

export default Hero;