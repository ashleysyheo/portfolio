import React from 'react';
import './scss/Project.scss';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';

const CodersPage = () => {
  let notMobile = window.innerWidth > 600 ? true : false;

  return (
    <div className="project-container">
      <header>
        <h1 className="project-title">Coders</h1>
        <div className="project-info-container">
          <p className="project-desc coders-desc">
            With the recent growth in developer roles in the job industry, many people are switching
            to the tech industry. However, what happens when you don’t have an aptitude for coding?
            With coders, Korean high school and college students can easily experience coding and
            check if they would like to continue their journey as a developer.
          </p>
          <div className="project-infos">
            <h4 className="project-info heading">Time</h4>
            <h4 className="project-info info">Nov 2020 – Dec 2020</h4>
            <h4 className="project-info heading">Role</h4>
            <h4 className="project-info info">User Research, Visual Design</h4>
          </div>
          <img
            className="project-logo"
            src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/UX_Design_Awards_Nominated_2021_RGB_Logo.svg"
            alt="uxd awards"
          ></img>
        </div>
      </header>
      <ProgressiveImage
        src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-cover.svg"
        placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-cover-small.png"
      >
        {(src, loading) => (
          <img
            className="cover-image"
            style={{
              filter: loading ? 'blur(10px)' : 'none',
              transition: loading ? 'none' : 'filter 0.2s ease-out',
            }}
            src={src}
            alt="coders"
          />
        )}
      </ProgressiveImage>

      <main>
        <div className="container container1 center">
          <div className="problem">
            <h4 className="heading">The Problem</h4>
            <p className="desc">
              If Korean high school and college students aren't proficient in English or don't have
              access to hagwons, they have difficulties in studying coding, understanding how it
              works, getting practical information needed to create what they want.
            </p>
          </div>

          <div className="solution">
            <h4 className="heading">The Solution</h4>
            <h5>First code, then study</h5>
            <p className="desc">
              Coders is a platform that aims to help Korean high school and college students who
              want to learn coding by allowing them to learn as they code real projects in their
              spare time. In coders, to help students have fun and understand what they are
              creating, we let students decide what projects they would like to create.
            </p>
          </div>
        </div>

        <div className="container container2 coders-bg-1">
          <div className="product-container center">
            <div className="product product1">
              <video autoPlay={notMobile} loop>
                <source
                  src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-onboarding.mp4"
                  type="video/mp4"
                ></source>
              </video>

              <div className="product-desc">
                <h4 className="heading">Anywhere, Anytime</h4>
                <p className="desc">
                  Whenever and where ever you are, either on the subway or walking on the street,
                  you can open up coders and easily study and code your project.
                </p>
              </div>
            </div>

            <div className="product product1">
              <div className="product-desc">
                <h4 className="heading">Select a project you would like to create</h4>
                <p className="desc">
                  Here is the main page to your coders experience. Select a project you want to
                  create today and get started. Also, Keep practicing to unlock more projects!
                </p>
              </div>

              <video autoPlay={notMobile} loop>
                <source
                  src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-homepage.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>

            <div className="product product1">
              <video autoPlay={notMobile} loop>
                <source
                  src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-concept.mp4"
                  type="video/mp4"
                ></source>
              </video>

              <div className="product-desc">
                <h4 className="heading">First study the concepts</h4>
                <p className="desc">
                  Before you get started with coding your project, study the concepts you are going
                  to use and review the concepts you have just learned through quizzes!
                </p>
              </div>
            </div>

            <div className="product product1">
              <div className="product-desc">
                <h4 className="heading">Complete the project through quizzes!</h4>
                <p className="desc">
                  Solve sets of interactive quizzes to code your project. You don’t need to type
                  long codes to code your project!
                </p>
              </div>

              <video autoPlay={notMobile} loop>
                <source
                  src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-quiz.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>

            <div className="product product1">
              <video autoPlay={notMobile} loop>
                <source
                  src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/coders-feature.mp4"
                  type="video/mp4"
                ></source>
              </video>

              <div className="product-desc">
                <h4 className="heading">View the output result and and ask questions!</h4>
                <p className="desc">
                  Click index.html tab or swipe left to see the current code’s output result. Ask
                  any questions that are related to the current topic. Also, don't forget to view
                  what you've coded so far in your browser!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container3">
          <h4 className="heading center">User Research</h4>
          <p className="desc center">
            From the beginning, I wanted to take a different approach to how to study coding. I
            wanted to learn what intrigues and excites users when they learn to code, so I
            interviewed 5 people about how and why they study coding.
          </p>

          <div className="interview-container center">
            <h6 className="question coders-color">What frustrates you with studying coding?</h6>
            <p className="answer">
              I don’t know where to start. What do I need to create what I want?
            </p>
            <p className="demographic">Student, 19 - 24</p>

            <h6 className="question coders-color">
              What do you want to achieve from learning coding?
            </h6>
            <p className="answer">Creating what I want and use and deploying them online.</p>
            <p className="demographic">Student, 16 - 18</p>

            <h6 className="question coders-color">What is important when studying coding?</h6>
            <p className="answer">
              Understanding programming and having fun while coding and developing projects. Also
              getting fast feedback.{' '}
            </p>
            <p className="demographic">Student, 19 - 24</p>
          </div>

          <div className="insight-container coders-bg-2">
            <div className="insights center">
              <h4 className="heading2">Key Insights</h4>
              <ol className="no-bullets">
                <li>
                  As tech is becoming more important in life, students feel the need to learn code
                  to prepare for their future
                </li>
                <li>
                  Books are boring and wordy and hagwons only focus on teaching as quickly as
                  possible
                </li>
                <li>
                  Students have a hard time figuring out where to start and what they need to know
                  to create real projects
                </li>
              </ol>
            </div>
          </div>

          <div className="persona-container center">
            <h4 className="heading">User Persona</h4>
            <p className="desc">
              Based on my research and secondary research on the learning environment in Korea, I
              created two user personas to identify key pain points of the users.
            </p>

            <ProgressiveImage
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/persona1.png"
              placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/persona1-small.png"
            >
              {(src, loading) => (
                <img
                  className="persona persona1"
                  style={{
                    filter: loading ? 'blur(10px)' : 'none',
                    transition: loading ? 'none' : 'filter 0.2s ease-out',
                  }}
                  src={src}
                  alt="coders"
                />
              )}
            </ProgressiveImage>

            <ProgressiveImage
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/persona2.png"
              placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/coders/persona2-small.png"
            >
              {(src, loading) => (
                <img
                  className="persona persona2"
                  style={{
                    filter: loading ? 'blur(10px)' : 'none',
                    transition: loading ? 'none' : 'filter 0.2s ease-out',
                  }}
                  src={src}
                  alt="coders"
                />
              )}
            </ProgressiveImage>
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/igpg8tLsURE"
          title="YouTube video player"
          frameBorder="0"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
      <Footer title={'coders'} />
    </div>
  );
};

export default CodersPage;
