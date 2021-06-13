import React from 'react';
import './scss/Project.scss';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';

const FilmPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Korean Independent Film Screening</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        The challenge of this project is to design a series of posters for the Korean Independent Film Screening 
                        using black and white and Times New Roman. The goal was to convey the characteristics of each film and 
                        the dryness of independent films. 
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Mar 2021 – Apr 2021</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Design</h4>
                    </div>
                </div>
            </header>
            <video autoPlay loop className='cover-image'>
                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/film-cover.mp4' type='video/mp4'></source>
            </video>
            <main>
                <div className='poster-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster1.jpg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster1-small.png">
                        {(src, loading) => <img style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Korean Independent Film Screening Poster' />}
                    </ProgressiveImage>

                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster2.jpg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster2-small.png">
                        {(src, loading) => <img style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Korean Independent Film Screening Poster' />}
                    </ProgressiveImage>

                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster3.jpg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster3-small.png">
                        {(src, loading) => <img style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Korean Independent Film Screening Poster' />}
                    </ProgressiveImage>

                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster4.jpg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster4-small.png">
                        {(src, loading) => <img style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Korean Independent Film Screening Poster' />}
                    </ProgressiveImage>

                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster5.jpg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/independent-film/poster5-small.png">
                        {(src, loading) => <img style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Korean Independent Film Screening Poster' />}
                    </ProgressiveImage>
                </div>
            </main>
            <Footer title={ "Korean Independent Film Screening" } />
        </div>
    );
};

export default FilmPage;