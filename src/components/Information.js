import React from 'react';
import Sketch from 'react-p5';
import './Information.scss';

const Information = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        getRandomColor();
        setInterval(changeRandomColor, 500);
    }

    const draw = p5 => {

    }

    let color = [];

    const getRandomColor = () => {
        color = [1,2,3].map(x=>Math.random()*256|0);
    }


    const mouseMoved = p5 => {
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        p5.stroke(p5.color(`rgb(${color.map(x=> x )})`));
        p5.strokeWeight(40)
    }

    const changeRandomColor = () => {
        let idx = Math.floor(Math.random() * 3);

        if (color[idx] + 10 > 255) {
            color[idx] -= 200;
        } else {
            color[idx] += 10;
        }
    }

    return(
        <div className='information-container'>
            <div className='information'>
                <div className='information-text'>
                    Hi, I'm Seoyeong, but you can call me Ashley. 
                    I'm a creative coder, designer, and adventurer.
                </div> 
                <div className='information-text'>
                    I am currently studying Communication Design at Parsons School of Design. 
                </div>
                <div className='information-text'>
                    I am interested in combining design and technology to create an experience that 
                    people could explore, enjoy, and work in. I am also passionate about questioning 
                    why things are the way they are and finding innovative solutions outside the constraints 
                    of tools and mediums.
                </div>
                <div className='information-links'>
                    <span className='underline'>
                        <a className='link resume' href='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/re%CC%81sume%CC%81.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
                    </span>
                    <span className='underline'>
                        <a className='link resume' href="https://www.linkedin.com/in/ashley-h-4b1832118/" target='_blank' rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </span>
                    <span className='underline'>
                        <a className='link resume' href="https://www.behance.net/ashleysyheo" target='_blank' rel="noopener noreferrer">
                            Behance
                        </a>
                    </span>
                    <span className='underline'>
                        <a className='link resume' href="https://github.com/ashleysyheo/" target='_blank' rel="noopener noreferrer">
                            GitHub
                        </a>
                    </span>
                    <span className='underline'>
                        <a className='link resume' href="mailto:ashleysyheo@gmail.com">Email</a>
                    </span>
                </div>
            </div>
            <Sketch setup={setup} draw={draw} mouseDragged={mouseMoved} />
        </div>
    );
};

export default Information;

