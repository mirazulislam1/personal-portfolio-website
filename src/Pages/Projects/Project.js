import React from 'react';

const Project = ({project}) => {
    const {image, name, title, technology} = project;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ height: '200px' }} src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-">
                <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <p>Technology : {technology}</p>
                <div className="card-actions">
                    <button className="btn btn-success">Live site</button>
                </div>
            </div>
        </div>
    );
};

export default Project;