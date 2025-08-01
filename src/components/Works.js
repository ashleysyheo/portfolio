import React, { useContext } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Link } from 'react-router-dom';
import WorkContext from '../contexts/works';
import './Works.scss';

const Works = () => {
  const state = useContext(WorkContext);
  let numOfWorks = Array.from(Array(9).keys());

  let notMobile = window.innerWidth > 600 ? true : false;

  return (
    <div className="works-container">
      {numOfWorks.map((idx) => {
        let work = state.works[idx];
        let block =
          work.thumb === 'image' ? (
            <div className="work" key={idx}>
              <ProgressiveImage src={work.largeImg} placeholder={work.smallImg}>
                {(src, loading) => (
                  <img
                    className="project-image"
                    style={{
                      filter: loading ? 'blur(10px)' : 'none',
                      transition: loading ? 'none' : 'filter 0.2s ease-out',
                    }}
                    src={src}
                    alt={work.title}
                  />
                )}
              </ProgressiveImage>
              <div className="information">
                <div className="work-name">{work.title}</div>
                <div className="work-info">
                  {work.type}, {work.year}
                </div>
              </div>
            </div>
          ) : (
            <div className="work" key={idx}>
              <video autoPlay={notMobile} loop>
                <source src={work.video} type="video/mp4"></source>
              </video>
              <div className="information">
                <div className="work-name">{work.title}</div>
                <div className="work-info">
                  {work.type}, {work.year}
                </div>
              </div>
            </div>
          );

        return (
          <div>
            <Link to={'/' + work.url}>{block}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
