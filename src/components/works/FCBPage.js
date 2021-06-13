import React from 'react';
import './scss/Project.scss';
import Footer from './Footer';
import ProgressiveImage from 'react-progressive-image';

const FCBPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>FC Barcelona</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        FC Barcelona is a book on the past, present, and future of Spain’s Futbol Club Barcelona.
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Nov 2019 – Jan 2020</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Design</h4>
                    </div>
                </div>
            </header>
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-cover-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>

            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-1.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-1-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>

            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-2.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-2-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-3.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-3-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-4.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-4-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-5.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-5-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-6.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-6-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-7.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-7-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-8.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-8-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-9.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-9-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>

            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-10.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/fcb/fcb-10-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            
            

            <Footer title={ "FC Barcelona" } />
        </div>
    );
};

export default FCBPage;