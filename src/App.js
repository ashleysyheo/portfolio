// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Information from './components/Information';
import Works from './components/Works';
import CodersPage from './components/works/CodersPage';
import CraigslistPage from './components/works/CraigslistPage';
import SpeakdrawPage from './components/works/SpeakdrawPage';
import SimpleWebPage from './components/works/SimpleWebPage';
import FCBPage from './components/works/FCBPage';
import FilmPage from './components/works/FilmPage';
import ParsonsBenefitPage from './components/works/ParsonsBenefitPage';
import { Route } from 'react-router-dom';
import DesignPage from './components/works/DesignPage';
import WebsitePage from './components/works/WebsitePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Route path='/' component={ Home } exact={ true } />
            <Route path='/works' component={ Works } />
            <Route path='/coders' component={ CodersPage } />
            <Route path='/speakdraw' component={ SpeakdrawPage } />
            <Route path='/2021-parsons-benefit' component={ ParsonsBenefitPage } />
            <Route path='/korean-independent-film-screening' component={ FilmPage } />
            <Route path='/craigslist-housing' component={ CraigslistPage } />
            <Route path='/simple-web' component={ SimpleWebPage } />
            <Route path='/information' component={ Information } />
            <Route path='/fc-barcelona' component={ FCBPage } />
            <Route path='/design-a-principle' component={ DesignPage } />
            <Route path='/website-collection' component={ WebsitePage } />
        </div>
    );
}

export default App;
