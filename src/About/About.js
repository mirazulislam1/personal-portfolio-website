import React from 'react';
import gentleman from '../photo/gentleman/gentleman.jpg'
const About = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-4xl mb-4'>About Me</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img className='rounded-lg' src={gentleman} alt="" />
                    </div>
                    <div className='py-20'>
                        <p>Hi, I am Sharif Mirazul Islam. I am Front-End Web Developer. I am complete more then twelve projects. I wish I become a good web developer.I love to explore new technology, solve new problems, and continuously learning new things to make the applications and websites. I build more useful and enjoyable for their users.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;