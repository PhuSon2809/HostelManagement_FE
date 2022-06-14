import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ShowRoom from './showRoom';
import Banner from '../../components/banner';

ListRoom.propTypes = {
    
};

function ListRoom(props) {
    return (
        <div>
            <Header />
            <Banner />
            <ShowRoom />
            <Footer />
        </div>
    );
}

export default ListRoom;