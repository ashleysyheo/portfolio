import React from 'react';
import Sketch from 'react-p5';
import './Home.scss';
import ProgressiveImage from 'react-progressive-image';

const Index = () => {
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
        p5.strokeWeight(20)
    }

    const changeRandomColor = () => {
        let idx = Math.floor(Math.random() * 3);

        if (color[idx] + 10 > 255) {
            color[idx] -= 200;
        } else {
            color[idx] += 10;
        }
    }

    return (
        <div className='index'>
            <div className="message-container">
                <h2>Draw anything you want!</h2>
            </div>
            <Sketch setup={setup} draw={draw} mouseDragged={mouseMoved} />
            <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/canvas-svg.svg' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/canvas-svg.svg">
                {(src, loading) => <img className='index-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Nice to meet you!' />}
            </ProgressiveImage>

        </div>
    );
};

export default Index;