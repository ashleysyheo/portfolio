import React, { useContext } from 'react';
import ProgressiveImage from 'react-progressive-image';
import ThesisContext from '../../contexts/thesis';
import './scss/Project.scss';
import Footer from './Footer';

const ThesisPage = () => {
    const state = useContext(ThesisContext); 
    let numOfWorks = Array.from(Array(2).keys())

    let notMobile = window.innerWidth > 600 ? true : false;

    return (
        <div className='project-container'>
            <header>
                <h1 className='project-title'>Thesis Experimentations</h1>
                <div className='project-info-container'>
                    <p className='project-desc'>
                        Thesis explorations that focus on the streets of Manhattan. 
                    </p>
                    <div className='project-infos'>
                        <h4 className='project-info heading'>Time</h4>
                        <h4 className='project-info info'>Fall 2021</h4>
                    </div>
                </div>
            </header>
            <main>
                <div className='websites-container'>
                    {
                        numOfWorks.map(idx => {
                            let website = state.thesis[idx];
                            let block = (
                                <div key={ idx }>
                                    <ProgressiveImage src={ website.largeImg } placeholder={ website.smallImg }>
                                        {(src, loading) => <img className='thesis-thumb-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt={ website.title } />}
                                    </ProgressiveImage>
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
            
            

            <Footer title={ "Thesis Experimentations" } />
        </div>
    );
};

export default ThesisPage;