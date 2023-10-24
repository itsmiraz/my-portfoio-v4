import React from 'react';
import logo from '../../../../public/Assets/miraj-logo.webp'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='p-6 sticky top-0 z-50'>
            <header className='flex justify-between items-center bg-[#001233bb] backdrop-blur-lg p-6 rounded '>
                <Image className='max-w-[100px]' src={logo} alt='miraj-logo' />
                <div>
                    <ul className='flex items-center gap-x-10 text-white'>
                        <li>
                            HOME
                        </li>
                        <li>
                            WORKS
                        </li>
                        <li>
                            ABOUT
                        </li>
                        <li>
                            CONTACT
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;