import React from 'react';
import PropTypes from 'prop-types';
import './outline.scss';

Outline.propTypes = {

};

function Outline(props) {
    return (
        <div className="outline">
            <h2 className>Our Hostel Outline </h2>
            <a href="#" className="btn">View more</a>
        </div>
    );
}

export default Outline;