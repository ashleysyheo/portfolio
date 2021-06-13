import React from 'react';
import './scss/Project.scss';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';

const ParsonsBenefitPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>2021 Parsons Benefit</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Parsons Benefit is an annual celebration of the inspirational and transformational role that fashion, 
                        design, and the arts play in today’s world. It is meant to welcome individuals to the annual benefit 
                        that is held to honour Parsons’ student works. As part of the University Design Studio, taught by 
                        Lucille Tenazas, Henry Wolf Professor of Communication Design, I had the opportunity to work with 
                        the New School Marketing and Communication department for the design for the 2021 Parsons Benefit. 

                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Feb 2021 – May 2021</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>Visual Design, Code</h4>
                    </div>
                </div>
            </header>
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-cover-small.png">
                {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='2021 Parsons Benefit' />}
            </ProgressiveImage>

            <main>
                <div className='container container1 center'>
                    <div className='problem'>
                        <h4 className='heading'>The Challenge</h4>
                        <p className='desc'>
                            Our studio was asked to design a digital invitation that would be sent out via email and a web 
                            banner for the website. We weren’t given a theme for this year’s benefit, but the brief required 
                            a logo and details about the event to be in both deliverables. We could also use 
                            BFA Fashion design students works as long as we didn’t focus only on a particular model, specifically the face. 
                        </p>
                    </div>
                    
                    <div className='solution'>
                        <h4 className='heading'>The Goal</h4>
                        <h5>Connect!</h5>
                        <p className='desc'>
                            In addition to the Benefit, this year, Parsons is also celebrating its 125th anniversary in 2021. So I decided 
                            to focus on connection. Connection between different people, creative minds, moments, and time during the 125 
                            years of Parsons. 
                        </p>
                    </div>
                </div>

                <div className='container container2 black-bg'>
                    <div className='product-container center'>
                        <div className='product product2'>
                            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-email.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-email-small.png">
                                {(src, loading) => <img className='product-image1 center' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Parsons Benefit Invitation' />}
                            </ProgressiveImage>

                            <div className='product-desc white-txt center'>
                                <p className='desc'>Invitation</p>
                            </div>
                        </div>

                        <div className='product product2'>
                            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-banner.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-banner-small.png">
                                {(src, loading) => <img className='product-image2' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Parsons Benefit Web Banner' />}
                            </ProgressiveImage>

                            <div className='product-desc white-txt center'>
                                <a href='http://www.parsonsbenefit.newschool.edu/s/1811/19bp/home.aspx?gid=2&pgid=413' target='_blank' rel='noopener noreferrer' className='white-txt'>
                                    <p className='desc'>Web Banner</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container container3'>
                    <div className='program-container center'>
                        <h4 className='heading'>Digital Program</h4>
                        <p className='desc'>Thankfully, my design was selected for the 2021 Parsons Benefit. And in addition to the invitation and web banner, I was asked to design the digital program for the benefit. Because the benefit was going to be partly virtual, the department decided to design a mobile-first website instead of a physical booklet.</p>
                    </div>
                </div>

                <div className='container container2 black-bg'>
                    <div className='product-container center'>
                        <div className='product product2'>
                            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-program-mobile.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-program-mobile-small.png">
                                {(src, loading) => <img className='product-image3 center' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Parsons Benefit Invitation' />}
                            </ProgressiveImage>
                            {/* <iframe src="https://ashleysyheo.github.io/parsons-benefit-2021/" title='2021 Parsons Benefit' className='iframe-mobile' frameBorder="0"></iframe> */}
                        </div>

                        <div className='product product2'>
                            <video autoPlay loop className='product-image2'>
                                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/parsons-benefit/benefit-program-web.mp4' type='video/mp4'></source>
                            </video>

                            <div className='product-desc white-txt center'>
                                <a href='https://ashleysyheo.github.io/parsons-benefit-2021/' target='_blank' rel='noopener noreferrer' className='white-txt'>
                                    <p className='desc'>Visit Digital Program</p>
                                </a>
                                <p className='caption center'>Link to update after June 15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer title={ "2021 Parsons Benefit" } />
        </div>
    );
};

export default ParsonsBenefitPage;