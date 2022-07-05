import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

Menu.propTypes = {

};

function Menu(props) {
    return (
        <div className='menu'>
            <ul className="nav align-s">
                <li className="nav-item">
                    <a className="nav-link active" href="#overview">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#utilities">Utilities</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#anotherRoom">Similar room</a>
                </li>
            </ul>
            <a className="nav-link text-white btn"><span className="fa fa-book fa-lg" /> Booking</a>
        </div>
    );
}

export default Menu;