import React from 'react';
import PropTypes from 'prop-types';
import './host.scss';

Host.propTypes = {

};

function Host(props) {
    return (
        <div className='host mb-4'>
            <div className='hostItem'>
                <img src="./images/room1.png" alt className="img-fluid" />
                <h3>Phu Son</h3>
                <p>View 1 more news</p>
                <a href="" className='btn'>
                    <i className="fa fa-phone mr-2"></i>  0914360736
                </a>
                <a href="" className='btn'>Send Email</a>
            </div>
        </div>
    );
}

export default Host;