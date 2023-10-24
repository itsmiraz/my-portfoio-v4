import React, { useState } from 'react';
import logo from '../../../../public/Assets/miraj-logo.webp'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Header = () => {
    const [Show, setShow] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -100, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.4 }}
            className='p-4 md:p-6 sticky top-0 z-50'>
            <header className='flex justify-between items-center bg-[#001233bb] backdrop-blur-lg p-3 md:p-6 rounded '>
                <Image className='max-w-[50px] md:max-w-[80px] lg:max-w-[100px]' src={logo} alt='miraj-logo' />
                <div>
                    <ul className={`flex ${Show ? "opacity-100 ":"opacity-0 lg:opacity-100"} lg:static absolute bg-[#001233bb] lg:bg-transparent right-0 lg:flex-row flex-col mt-8 lg:mt-0 items-center gap-x-10 md:text-lg text-xs space-y-2 md:space-y-0 lg:px-0 px-6 py-3 lg:py-0 rounded text-white`}>
                        <li>
                            <a href="#home">


                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                WORKS
                            </a>

                        </li>
                        <li>
                            <a href="#about">ABOUT</a>

                        </li>
                        <li>
                            <a href="#contact">

                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='lg:hidden block'>
                    <button aria-label='Toggle Menu' onClick={() => setShow(!Show)} className='text-white'>

                        {Show ? <AiOutlineClose /> :

                            <AiOutlineMenu />
                        }
                    </button>
                </div>
            </header>
        </motion.div>
    );
};

export default Header;