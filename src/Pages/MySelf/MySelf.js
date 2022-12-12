import React from 'react';
import frontImages from '../../photo/front-images/front.jpg'
const MySelf = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img style={{height: '300px'}} src={frontImages} className=" rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-4xl font-bold">Hello, I am <br /> Sharif Mirazul Islam</h1>
                        <h2 className='text-3xl font-semibold text-green-700'>Front-End Developer</h2>
                        <p className="py-6">I am Front-End Web Developer with six months of learning Experience. <br /> I am a hardworking, honest person who learns quickly.</p>
                        <button className="btn btn-success"><a href="https://drive.google.com/file/d/1l0_8Ov1qIBz-WuXoAf7LEzJOjRsBxiz2/view?usp=share_link">Get Resume</a></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MySelf;