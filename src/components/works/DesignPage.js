import React from 'react';
import './scss/Project.scss';
import Footer from './Footer';
import ProgressiveImage from 'react-progressive-image';

const DesignPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Design a Principle</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Designing and typesetting a book adapted from The Vignelli Canon by Massimo Vignelli. With its simple design and color, the book focuses on the fundamental aspects of design that are emphasized in the excerpt.
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Nov 2019 – Jan 2020</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Design</h4>
                    </div>
                </div>
            </header>
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-cover-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>

            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-1.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-1-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>

            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-2.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-2-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-3.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-3-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-4.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-4-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-5.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-5-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-6.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/design/design-6-small.png">
                {(src, loading) => <img className='image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
            </ProgressiveImage>
            
            <Footer title={ "Design a Principle" } />
        </div>
    );
};

export default DesignPage;