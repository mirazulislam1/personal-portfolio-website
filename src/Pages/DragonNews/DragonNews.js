import React from 'react';
import news1 from '../../photo/News/News1.PNG'
import news2 from '../../photo/News/News2.PNG'
import news3 from '../../photo/News/News3.PNG'
import news4 from '../../photo/News/News4.PNG'
const DragonNews = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={news1} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={news2} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={news3} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={news4} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
            </div>
            <div className='my-4'>
                <li>This project name Dragon News.</li>
                <li>Every person visit my project. AnyOne read see more then his/her first register and login then open service page. and verify email</li>
                <li>This projects has 8 categories.Every category click then show details categories.</li>
                <li>This project has use JavaScript-90.5% ,HTML-6.2%,CSS-3.3%</li>
            </div>
            <div className='text-center py-4'>
                <button className='btn btn-success m-2'><a href="https://dragon-news-48206.web.app/">Live Site</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/dragon-news-client">Client side</a></button>
                <button className='btn btn-success m-2'><a href="https://github.com/mirazulislam1/dragon-news-server">Server Site</a></button>
            </div>
        </div>
    );
};

export default DragonNews;