import React from 'react';

const Footer = () => {
    return (
        <footer className=' h-screen bg-gray-900  w-screen '>
           <div className='max-w-6xl w-full mx-auto h-1/2 flex items-center  '>
                <div className='max-w-6xl w-full  flex flex-wrap items-center
           lg:justify-between mx-auto px-5 gap-x-8 gap-y-5 lg:gap-y-0 '>
           <a className='font-extrabold text-white text-4xl
           '> TINJA </a>

            <ul className={'flex items-center flex-wrap justify-start text-white gap-x-8'}>
                    <li className='font-bold pr-2 relative before:absolute before:w-5 before:h-1 before:right-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-full before:bg-white  '>PRIVACY POLICY</li>
                    <li className='font-bold pr-2 relative before:absolute before:w-5 before:h-1 before:right-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-full before:bg-white '>TERMS OF SERVICES</li>
                    <li className='font-bold pr-2 relative before:absolute before:w-5 before:h-1 before:right-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-full before:bg-white '>RULES OF CONDUCT</li>
                    <li className='font-bold pr-2 relative before:absolute before:w-5 before:h-1 before:right-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-full before:bg-white '>COOKIES POLICY</li>
                    <li className='font-bold pr-2  '>SUPPORT CENTER</li>
                </ul>
           </div>
           </div>
           <div className=' max-w-6xl w-full   flex flex-wrap items-center justify-between mx-auto px-5 gap-x-8 gap-y-5 lg:gap-y-0 '>
            <p className='font-bold text-white'> © Tinja is Proudly Owned by <span className='text-purple-600'> EnvyTheme</span> </p>
            <div>
               <span className='text-white font-bold' > Select Your Language  </span>
                <select className='bg-white px-5 py-2 rounded-md ml-4 '>
                <option>ENGLISH</option>
                <option>HINDI</option>
                <option>FRENCH</option>
                <option>SPANISH</option>
                </select>
            </div>
           </div>
           <div></div>


        </footer>
    );
};

export default Footer;