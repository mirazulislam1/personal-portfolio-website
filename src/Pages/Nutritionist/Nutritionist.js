import React from 'react';
import img1 from '../../photo/Nutritionist/Achivement.PNG'
import img2 from '../../photo/Nutritionist/doctor.PNG'
import img3 from '../../photo/Nutritionist/fitness.PNG'
import img4 from '../../photo/Nutritionist/Services.PNG'
const Nutritionist = () => {

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
            </div>
            <div className='my-4'>
                <li>This project name Personal Nutritionist.</li>
                <li>Every person visit my project. AnyOne get service then his/her first register and login then open service page.</li>
                <li>The homepage will have a Navbar, a Carousel a meaningful section. Under the navbar, display a list of services.There are show 3 services.At last has footer.</li>
                <li>There will be a " see all" button/icon under the 3 services. When clicking the button, take the user to the /services route and show all the services on that page.</li>
                <li>This project has use JavaScript-93.7% ,HTML-3.9%,CSS-2.4%</li>
            </div>
            <div className='text-center py-4'>
                <button className='btn btn-success m-2'><a href="https://service-review-86d3f.web.app/">Live Site</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/Nutritionist-client-side">Client side</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/Nutritionist-server-side">Server Site</a></button>
            </div>
        </div>
    );
};

export default Nutritionist;