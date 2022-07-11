import React from 'react';
import PropTypes from 'prop-types';
import Booking_Header from '../../components/booking_header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from './breadcrumb';
import Content_header from './content_header';
import Content_body from './content_body'

Booking.propTypes = {

};

function Booking(props) {
    return (
        <div>
            <Booking_Header />
            <div className='container-fluid'>
                <Breadcrumb />
                <Content_header />
                <Content_body />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Booking;