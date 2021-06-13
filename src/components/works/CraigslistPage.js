import React from 'react';
import './scss/Project.scss';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';

const CraigslistPage = () => {
    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Craigslist Housing</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Finding the right house for you can be an intimidating task, especially if you're moving to a new city or country. 
                        This case study explores the redesign of Craigslist Housing, one of the verticals of Craigslist. Through the globally 
                        served Craigslist, potential tenants can easily live anywhere in the world. 
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Sept 2020 – Oct 2020</h4>
                        <h4 className='project-info heading'>Role</h4>
                        <h4 className='project-info info'>User Research, Visual Design</h4>
                    </div>
                </div>
            </header>
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-cover-small.png">
                {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Craigslist Housing' />}
            </ProgressiveImage>

            <main>
                <div className='container container1 center'>
                    <div className='problem'>
                        <h4 className='heading'>The Problem</h4>
                        <p className='desc'>
                            It can be tiresome for users to find a house. To find a house, one needs to find a housing website/app in a 
                            particular area. In New York alone, there are platforms like StreetEasy, NakedApartments, and Compass. If 
                            the scope of relocation is expanded overseas, the user's effort will increase further. There are countless 
                            housing websites/apps. London has Zoopla and Rightmove, and Paris has Lodgis and Vingt Paris. So here, 
                            users have to figure out which website is more efficient and has the most properties. Thus, it's an 
                            inconvenient process that makes bothersome things more bothersome.
                        </p>
                    </div>
                    
                    <div className='solution'>
                        <h4 className='heading'>The Solution</h4>
                        <h5>Live Anywhere!</h5>
                        <p className='desc'>
                            Craigslist Housing helps prospective tenants who are looking for a new home when relocating by reducing user’s 
                            trouble in searching for a new platform to look for houses in a particular region/country and enabling people 
                            to find a home and live anywhere in the world through the world wide operating Craigslist.
                        </p>
                    </div>
                </div>

                <div className='container container2 craigslist-bg-1'>
                    <div className='product-container center'>
                        <div className='product product1'>
                            <video autoPlay loop>
                                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-onboarding.mp4' type='video/mp4'></source>
                            </video>

                            <div className='product-desc white-txt'>
                                <h4 className='heading'>Hey there! Where do you want to live?</h4>
                                <p className='desc'>Don’t worry about finding a home in another city or country! Craigslist Housing serves 700 cities spread across 70 countries. Craigslist Housing also takes advantage of the high user traffic of Craigslist to create a robust online marketplace.</p>
                            </div>
                        </div>

                        <div className='product product1'>
                            <div className='product-desc white-txt'>
                                <h4 className='heading'>Find your dream house</h4>
                                <p className='desc'>Easily filter through different options to find the right house for you!</p>
                            </div>

                            <video autoPlay loop>
                                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-find.mp4' type='video/mp4'></source>
                            </video>
                        </div>

                        <div className='product product1'>
                            <video autoPlay loop>
                                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-check.mp4' type='video/mp4'></source>
                            </video>

                            <div className='product-desc white-txt'>
                                <h4 className='heading'>Check if it's the one</h4>
                                <p className='desc'>Check its amenities and how far the apartment is from your college or workplace! Also, don’t forget to connect. You can easily message the tenant owner by clicking the message icon.</p>
                            </div>
                        </div>

                        <div className='product product1'>
                            <div className='product-desc white-txt'>
                                <h4 className='heading'>You can also easily rent out your apartment!</h4>
                                <p className='desc'>Just follow the instructions, and your house will be on the market right away.</p>
                            </div>

                            <video autoPlay loop>
                                <source src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/craigslist-post.mp4' type='video/mp4'></source>
                            </video>
                        </div>                        
                    </div>
                </div>
                <div className='container container3'>
                    <h4 className='heading center'>User Research</h4>
                    <p className='desc center'>To learn more about people’s experience with finding houses abroad, I interviewed 4 students who are studying abroad and have experience with renting apartments.</p>

                    <div className='interview-container center'>
                        <h6 className='question craigslist-color'>How was your experience relocating to where you're at right now?</h6>
                        <p className='answer'>It was a nightmare. First, I took some time to figure out how you rent here in Paris. And when you're a foreigner, it's extra harder to find a nice apartment. My experience was full of endless emails and phone calls.</p>
                        <p className='demographic'>Recent graduate, 25 - 30</p>

                        <h6 className='question craigslist-color'>How was your experience with finding an apartment via Craigslist?</h6>
                        <p className='answer'>I loved how I could directly talk to the owner. I'm an international student so I need a guarantor to rent a house, but through Craigslist, I could negotiate some circumstances.</p>
                        <p className='demographic'>Student, 18 - 24</p>
                    </div>

                    <div className='insight-container craigslist-bg-2'>
                        <div className='insights center'>
                            <h4 className='heading2'>Key Insights</h4>
                            <ol className='no-bullets'>
                                <li>Users struggle with finding apartment from the very beginning, such as finding the right platform to rent a house</li>
                                <li>Books are boring and wordy and hagwons only focus on teaching as quickly as possible</li>
                                <li>Students have a hard time figuring out where to start and what they need to know to create real projects</li>
                            </ol>
                        </div>
                    </div>

                    <div className='target-container'>
                        <h4 className='heading center'>Target User</h4>
                        <p className='desc center'>
                            College students and recent graduates around the world, looking for housing in a new region/country when relocating for studies or new jobs.   
                        </p>
                    </div>

                    <div className='persona-container center'>
                        <h4 className='heading'>User Persona</h4>
                        <p className='desc'>Based on my research, I created two user personas to identify key pain points of the users when finding a new home in a new place.</p>

                        <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/persona1.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/persona1-small.png">
                            {(src, loading) => <img className='persona persona1' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Persona' />}
                        </ProgressiveImage>

                        <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/persona2.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/persona2-small.png">
                            {(src, loading) => <img className='persona persona2' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Persona' />}
                        </ProgressiveImage>
                    </div>

                    <div className='journey-container center'>
                        <h4 className='heading'>Journey Map</h4>
                        <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/journey-map.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/journey-map-small.png">
                            {(src, loading) => <img className='journey-map' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Journey Map' />}
                        </ProgressiveImage>
                    </div>

                    <div className='ia-container center'>
                        <h4 className='heading'>Information Architecture</h4>
                        <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/site-map.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/site-map-small.png">
                            {(src, loading) => <img className='journey-map' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Site Map' />}
                        </ProgressiveImage>
                    </div>
                    <div className='flow-container center'>
                        <h4 className='heading'>User Flow</h4>
                        <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/user-flow.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/craigslist-housing/user-flow-small.png">
                            {(src, loading) => <img className='site-map' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Site Map' />}
                        </ProgressiveImage>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/fWf5XJpiD6s" title="YouTube video player" frameBorder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </main>
            <Footer title={ "Craigslist Housing" } />
        </div>
    );
};

export default CraigslistPage;