import React from 'react';
import './scss/Project.scss';
import Footer from './Footer';

const SpeakdrawPage = () => {
    let notMobile = window.innerWidth > 600 ? true : false;

    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>(simple web)</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Whenever I am on the web, I get the impression that everything is the same. For example, with Wikipedia or Google, 
                        whatever you search, it will always be in the same layout. And I was a bit fed up with the lack of creativity on 
                        the web. So I created a chrome and firefox extension that overrides the styling of the website. (simple web) is an 
                        ode to the creative nature of the web through simple and abstract shapes and beautiful colors. 
                        <br /> <br /> 
                        <a href='https://simple-web.xyz/' target='_blank' rel='noopener noreferrer'>Visit Website</a>
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Feb 2020 – Mar 2020</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Code, Design</h4>
                    </div>
                </div>
            </header>
            <video autoPlay={ notMobile } loop className='cover-image no-margin'>
                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/simple-web/simple-web-cover.mp4' type='video/mp4'></source>
            </video>
            <Footer title={ "(simple web)" } />
        </div>
    );
};

export default SpeakdrawPage;