import { createContext } from 'react';

const WorkContext = createContext({
  works: [
    {
      year: '2023 - Present',
      title: 'Toss Bank',
      type: 'App Webview, Website',
      url: 'tossbank',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/tossbank-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/tossbank-thumb-small.png',
    },
    {
      year: '2021',
      title: 'coders',
      type: 'App',
      url: 'coders',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/coders-thumb.svg',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/coders-thumb-small.png',
    },
    {
      year: '2021',
      title: 'Speak, Draw!',
      type: 'Website',
      url: 'speakdraw',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/speakdraw-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/speakdraw-thumb-small.png',
    },
    {
      year: '2021',
      title: '2021 Parsons Benefit',
      type: 'Invitation, Website',
      url: '2021-parsons-benefit',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/parsons-benefit-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/parsons-benefit-thumb-small.png',
    },
    {
      year: '2021',
      title: 'Thesis Experimentations',
      type: 'Website',
      url: 'thesis-experimentations',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/street-museum-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/street-museum-thumb-small.png',
    },
    {
      year: '2020',
      title: 'Craigslist Housing',
      type: 'App',
      url: 'craigslist-housing',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/craigslist-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/craigslist-thumb-small.png',
    },
    {
      year: '2019',
      title: 'Design a Principle',
      type: 'Editorial',
      url: 'design-a-principle',
      thumb: 'image',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/design-principle-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/design-principle-thumb-small.png',
    },
    {
      year: '2020',
      title: 'Korean Independent Film Screening',
      type: 'Poster',
      url: 'korean-independent-film-screening',
      thumb: 'video',
      video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/film-thumb.mp4',
    },
    {
      year: '2020',
      title: 'FC Barcelona',
      type: 'Editorial',
      url: 'fc-barcelona',
      thumb: 'image',
      largeImg: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/FCB-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/FCB-thumb-small.png',
    },
    {
      year: '2019–2021',
      title: 'Website Collection',
      type: 'Website',
      url: 'website-collection',
      thumb: 'video',
      video: 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/website-thumb.mp4',
    },
  ],
});

export default WorkContext;
