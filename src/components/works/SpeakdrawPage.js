import React from 'react';
import './scss/Project.scss';
import Footer from './Footer';

const SpeakdrawPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Speak, Draw!</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Speak, Draw! is a collaborative canvas where you can draw along with anyone on the web by speaking. It utilises 
                        <a href='https://p5js.org/' target='_blank' rel='noopener noreferrer'>p5.js</a> and Web Speech API, and takes 
                        drawings from <a href='https://quickdraw.withgoogle.com/data' target='_blank' rel='noopener noreferrer'>Quick, Draw!</a> dataset. 
                        <br /> <br /> 
                        <a href='https://speakdraw.com/' target='_blank' rel='noopener noreferrer'>Visit Website</a>
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Mar 2021 – Apr 2021</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Code, Design</h4>
                    </div>
                </div>
            </header>
            <video autoPlay loop className='cover-image no-margin'>
                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/speak-draw/speak-draw-cover.mp4' type='video/mp4'></source>
            </video>
            <Footer title={ "Speak, Draw!" } />
        </div>
    );
};

export default SpeakdrawPage;