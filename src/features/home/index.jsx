import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Carousel from './carousel';
import Services from './services';
import Footer from '../../components/footer';
import Blog from './blog';
import Outline from './outline';
import Hostel from './hostel';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <Header />
            <Carousel />
            <div className='container'>
                <Blog />
                <Services />
                <Outline />
                <Hostel />
            </div>
            <Footer />
        </div>
    );
}

export default Home;