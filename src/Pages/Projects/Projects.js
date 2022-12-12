import React from 'react';
import nutritionist from '../../photo/projects/Nutrionist.PNG'
import computer from '../../photo/projects/Computer.PNG'
import news from '../../photo/projects/Dragon news.PNG'
import { Link } from 'react-router-dom';


const Projects = () => {

    return (
        <div className='my-8'>
            <h1 className='text-center font-bold text-4xl'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img style={{ height: '200px' }} src={nutritionist} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-">
                        <h2 className="card-title">Nutritionist</h2>
                        <p>Full-stack service Providing website.There doctor provide service patient.</p>
                        <p>Technology : tailwind, ReactJs, Firebase, Express, Node, MongoDB</p>
                        <div className="card-actions">
                            <button className="btn btn-success"><Link to='/nutritionist'>See Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img style={{ height: '200px' }} src={computer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-">
                        <h2 className="card-title">Computer-Science</h2>
                        <p>Full-stack service Providing website.There learning computer science.</p>
                        <p>Technology : Bootstrap, ReactJs, Firebase, Express, Node, MongoDB</p>
                        <div className="card-actions">
                            <button className="btn btn-success"><Link to='/course'>See Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img style={{ height: '200px' }} src={news} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-">
                        <h2 className="card-title">Dragon-News</h2>
                        <p>Full-stack News-Portal website.There has international news.</p>
                        <p>Technology : tailwind, ReactJs, Firebase, Express, Node, MongoDB</p>
                        <div className="card-actions">
                            <button className="btn btn-success"><Link to='/news'>See Details</Link></button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Projects;