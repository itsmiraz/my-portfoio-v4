import React from 'react';
import Balancer from 'react-wrap-balancer';
import pinkbgOverlay from '../../../public/Assets/pink-backgroud-overlay.webp'
import Image from 'next/image';


const AboutMe = () => {

    const AboutMeConstans = [
        {
            title: 'Who I am',
            desc: 'Hello, I`m Miraj Hossen, a passionate and innovative full-stack developer based in Bangladesh. At just 20 years old, I`ve already embarked on an exciting journey in the world of web development. I`m driven by my love for coding, creativity, and the ever-evolving tech landscape.'
        },
        {
            title: 'What I Do',
            desc: 'As a full-stack developer, I thrive in both front-end and back-end development, crafting seamless and user-friendly web applications. My toolbox includes a range of technologies and programming languages, and I relish the opportunity to tackle complex problems and turn ideas into robust, interactive digital experiences. '
        },
        {
            title: 'My Journey',
            desc: 'My journey in the tech industry began at an early age, and it has been a fascinating adventure filled with continuous learning and growth. I started my coding journey as a teenager, and my passion for development has only intensified with time. I`ve dedicated countless hours to honing my skills, working on personal and collaborative projects.'
        },
        {
            title: 'My Goal',
            desc: 'Looking ahead, my goal is to make a meaningful impact in the world of web development. I aspire to contribute to innovative projects, create user-centric applications, and engage in collaborations that push the boundaries of technology. My ultimate aim is to become a respected figure in the tech community and inspire the next generation of developers from Bangladesh and beyond.'
        },
    ]

    return (
        <section className='py-20 pl-32  relative'>
            <div>
                    <h2 className='head-text'>About Me</h2>
            <p className='subtitle'>Hey there, I`m Miraj, a passionate Full Stack Developer <br />
                with a strong love for all things code and technology.</p>

            <div className='relative  pt-10 w-full'>
            <div className='pt-6 flex flex-wrap gap-14'>
                {
                    AboutMeConstans.slice(0,2).map((data, i) => <AboutMeCard data={data} key={i} />)
                }
            </div>
            <div className='pt-12 pl-10 flex flex-wrap gap-14'>
                {
                    AboutMeConstans.slice(2,4).map((data, i) => <AboutMeCard data={data} key={i} />)
                }
                </div>
                <Image className='absolute z-10 inset-0 transform mx-auto' src={pinkbgOverlay} alt='pink-overlay-bg'/>

           </div>
        </div>
        </section>
    );
};

export default AboutMe;

const AboutMeCard = ({ data }) => {
    return <div className='max-w-[490px] z-30  backdrop-blur pt-4 pb-6 px-12 rounded w-full bg-[#010f161f]  border-2 border-opacity-30 border-gray-700'>
        <h2 className='Secordary-Title'>{data.title} </h2>
        <p className='small-text py-2 '><Balancer>
            {data.desc}
        </Balancer>
        </p>
    </div>
}