import React from 'react';

const Skills = () => {
    return (
        <div className='py-8 '>
            
            <div className='text-center'>
                <h1 className='text-center font-bold text-2xl mb-4'>Skills Progress</h1>
                <h1 className='font-semibold'>HTML 90%</h1>
                <progress className="progress progress-accent w-96" value="90" max="100"></progress>
                <br />
                <h1 className='font-semibold'>CSS 90%</h1>
                <progress className="progress progress-accent w-96" value="90" max="100"></progress>
                <br />
                <h1 className='font-semibold'>Tailwind 85%</h1>
                <progress className="progress progress-accent w-96" value="85" max="100"></progress>
                <br />
                <h1 className='font-semibold'>JavaScript 80%</h1>
                <progress className="progress progress-accent w-96" value="80" max="100"></progress>
                <br /> 
                <h1 className='font-semibold'>ReactJs 65%</h1>
                <progress className="progress progress-accent w-96" value="65" max="100"></progress>
                <br />
                <h1 className='font-semibold'>NodeJs 60%</h1>
                <progress className="progress progress-accent w-96" value="60" max="100"></progress>
            </div>
        </div>
    );
};

export default Skills;