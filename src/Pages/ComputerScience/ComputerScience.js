import React from 'react';
import course1 from '../../photo/Courses/Course.PNG'
import course2 from '../../photo/Courses/Course2.PNG'
import course3 from '../../photo/Courses/CourseDetails.PNG'
import course4 from '../../photo/Courses/HomePage.PNG'
const ComputerScience = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course1} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course2} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course3} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course4} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
            </div>
            <div className='my-4'>
                <li>This project name Computer Science Tutorial.</li>
                <li>Every person visit my project.</li>
                <li>The homepage will have a Navbar.Navbar has course details</li>
                <li>There will be a " see all" button/icon under the 6 courses. When clicking the button, take the user to the services route and show all the services on that page.</li>
                <li>This project has use JavaScript-89.6% ,HTML-4.9%,CSS-5.5%</li>
            </div>
            <div className='text-center py-4'>
                <button className='btn btn-success m-2'><a href="https://learning-platform-client-69137.web.app/">Live Site</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/Computer_science_tutorial">Client side</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/Computer-science-server-side">Server Site</a></button>
            </div>
        </div>
    );
};

export default ComputerScience;