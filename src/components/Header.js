import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='name'><Link to='/'>
                    Ashley Heo 
                    {/* <div className='name-sub'>
                        <p>Designer,</p>
                        <p>Creative Thinker,</p>
                        <p>& Problem Solver</p>
                    </div> */}
                </Link></div>
                <div className='name'><Link to='/works'>Works</Link></div>
                <div className='information'><Link to='/information'>Information</Link></div>
            </div>
        </div>
    );
};

export default Header;