import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Discribe from './describe';
import SlideRoom from './slideRoom';

RoomDetail.propTypes = {
    
};

function RoomDetail(props) {
    return (
        <div>
            <Header />
            <Discribe />
            <SlideRoom />
            <Footer />
        </div>
    );
}

export default RoomDetail;