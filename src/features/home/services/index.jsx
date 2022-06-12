import React from 'react';
import PropTypes from 'prop-types';
import './services.scss';

Services.propTypes = {

};

function Services(props) {
    return (
        <div className="service">
            <div className="col-12 row">
                <div className="box col-6 col-md-3">
                    <i className="fa fa-location-arrow" aria-hidden="true" />
                    <h3>Location</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime.</p>
                </div>
                <div className="box col-6 col-md-3">
                    <i className="fa fa-hospital-o" aria-hidden="true" />
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime.</p>
                </div>
                <div className="box col-6 col-md-3">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <h3>Market</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime.</p>
                </div>
                <div className="box col-6 col-md-3">
                    <i className="fa fa-car" aria-hidden="true" />
                    <h3>Walking</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;