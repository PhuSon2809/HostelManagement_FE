import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

Title.propTypes = {

};

function Title(props) {
    return (
        <div className='name'>
            <h3>Our room in The Green Hostel</h3>
            <p><i className="fa fa-check"></i> 36 rooms</p>
            <p><i className="fa fa-phone-square"></i> 0914 360 736</p>
            <p><i className="fa fa-envelope"></i> greenhostel@gmail.com</p>
            <p><i className="fa fa-map-marker"></i> District 1, Ho Chi Minh City</p>
        </div>
    );
}

export default Title;