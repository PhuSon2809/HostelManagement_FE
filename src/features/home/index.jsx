import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Carousel from './carousel';
import Services from './services';
import OutlineHostel from './outlineHostel';
import Footer from '../../components/footer';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <Header />
            <Carousel />
            <div className='container'>
                <Services />
                <OutlineHostel />
            </div>
            <Footer />
        </div>
    );
}

export default Home;