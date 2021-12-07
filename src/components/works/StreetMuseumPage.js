import React from 'react';
import './scss/Project.scss';
import Footer from './Footer';

const StreetMuseumPage = () => {
    let notMobile = window.innerWidth > 600 ? true : false;

    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Street Museum</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        We walk by numerous buildings every day. But do you remember the buildings that you have passed by? 
                        Or have you ever been curious about those buildings? While ordinary buildings that you see and pass 
                        by every day might not be as significant compared to artworks and historical artefacts, they are components 
                        that create the city that we live in and are closely intertwined with our lives. Walk the streets of Greenwich Village, Noho, Bowery, and Soho.
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Fall 2021</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Code, Design</h4>
                    </div>
                </div>
            </header>
            <video autoPlay={ notMobile } loop className='cover-image no-margin'>
                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/speak-draw/speak-draw-cover.mp4' type='video/mp4'></source>
            </video>
            <Footer title={ "Speak, Draw!" } />
        </div>
    );
};

export default StreetMuseumPage;