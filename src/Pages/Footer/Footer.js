import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-stone-700 p-12 rounded-xl text-center'>
            <h1 className='text-center text-white text-3xl mb-4'>Social Contact Me</h1>
            <div className='w-0 mx-auto text-center flex gap-3 mb-4'>
                <a href="https://www.facebook.com/"><FaFacebook className='text-white text-2xl'></FaFacebook></a>
                <a href="https://www.linkedin.com/in/sharif-mirazul-islam/"><FaLinkedin className='text-white text-2xl'></FaLinkedin></a>
                
            </div>
           
            <p className='text-center text-white'>Copyright 2022 - All right reserved</p>
        </div>
    );
};

export default Footer;