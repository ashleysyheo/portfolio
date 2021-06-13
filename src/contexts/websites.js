import { createContext } from 'react';

const WebsiteContext = createContext({ websites : [
    {
        year: '2020',
        title: 'Lumière',
        url: 'https://lumiere.glitch.me/',
        video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/website-thumb.mp4',
    },
    {
        year: '2021',
        title: 'Road To Seoul',
        url: 'https://road-to-seoul.glitch.me/',
        video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/websites/road-to-seoul-thumb.mp4',
    },
    {
        year: '2020',
        title: '(window.innerWidth x window.innerHeight)',
        url: 'https://untitled-2020.glitch.me/',
        video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/websites/untitled-thumb.mp4',
    },
    {
        year: '2020',
        title: 'doodle',
        url: 'https://doodle-2020.glitch.me/',
        video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/websites/doodle-thumb.mp4',
    },
    {
        year: '2020',
        title: 'allumer',
        url: 'https://allumer.glitch.me/',
        video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/websites/allumer-thumb.mp4',
    },
]});

export default WebsiteContext;