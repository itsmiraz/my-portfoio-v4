import React from 'react';
import logo from '../../../../public/Assets/miraj-logo.webp'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: -100, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.4 }}
            className='p-6 sticky top-0 z-50'>
            <header className='flex justify-between items-center bg-[#001233bb] backdrop-blur-lg p-6 rounded '>
                <Image className='max-w-[100px]' src={logo} alt='miraj-logo' />
                <div>
                    <ul className='flex items-center gap-x-10 text-white'>
                        <li>
                            <a href="#home">


                                HOME
                            </a>
                        </li>
                        <li>
                            WORKS
                        </li>
                        <li>
                            <a href="#about">ABOUT</a>

                        </li>
                        <li>
                            CONTACT
                        </li>
                    </ul>
                </div>
            </header>
        </motion.div>
    );
};

export default Header;