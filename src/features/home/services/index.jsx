import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

Services.propTypes = {

};

function Services(props) {
    return (
        <div className="service">
            <div className="row row-content align-self-center">
                <div className="col-12">
                    <h1 className="title m-auto">Servies</h1>
                </div>
                <div className="col-12 col-md-6 mt-3 mb-3">
                    <img src="./images/hostel1.png" alt className="rounded" />
                </div>
                <div className="col-12 col-md-6 mb-3 ml-auto">
                    <h1 className="name">Go Green Hostel</h1>
                    <p> <i className="fa fa-newspaper-o" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium a obcaecati dolor dicta dignissimos, doloremque suscipit non est voluptatem nisi
                        maxime alias minima magnam iste, exercitationem soluta reiciendis quaerat fuga.</p>
                    <p> <i className="fa fa-newspaper-o" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit non assumenda, illum blanditiis nam, quia porro officiis expedita, explicabo aspernatur
                        maxime? Rem, quo. Dolore distinctio sint ipsum unde culpa molestiae.</p>
                </div>
                <hr />
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
        </div>
    );
}

export default Services;