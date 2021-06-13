import React, { useContext } from 'react';
import WebsiteContext from '../../contexts/websites';
import './scss/Project.scss';
import Footer from './Footer';

const WebsitePage = () => {
    const state = useContext(WebsiteContext); 
    let numOfWorks = Array.from(Array(5).keys())

    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Website Collection</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        A collection of websites I've designed and coded over the years.
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Nov 2019 – Jan 2020</h4>
                    </div>
                </div>
            </header>
            <main>
                <div className='websites-container'>
                    {
                        numOfWorks.map(idx => {
                            let website = state.websites[idx];
                            let block = (
                                <div key={ idx }>
                                    <video autoPlay loop>
                                        <source src={ website.video } type='video/mp4'></source>
                                    </video>
                                    <div className='information'>
                                        <div className='website-name'>{ website.title }</div>
                                        <div className='website-info'>{ website.year }</div>
                                    </div>
                                </div>
                            );

                            return (
                                <div className='website'>
                                    <a href={ website.url } target="_blank" rel="noopener noreferrer">{ block }</a> 
                                </div>
                            );
                        })
                    }
                </div>
            </main>
            
            

            <Footer title={ "Website Collection" } />
        </div>
    );
};

export default WebsitePage;