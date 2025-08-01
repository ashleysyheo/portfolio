import { createContext } from 'react';

const ThesisContext = createContext({
  thesis: [
    {
      year: '2021',
      title: 'Street Museum',
      url: 'https://ashleysyheo.github.io/Street-Museum/',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/street-museum-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/street-museum-thumb-small.png',
    },
    {
      year: '2021',
      title: 'Manhattan: Block by Block',
      url: 'https://manhattan-block-by-block.glitch.me/',
      largeImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/block-thumb.png',
      smallImg:
        'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/images/block-thumb-small.png',
    },
  ],
});

export default ThesisContext;
