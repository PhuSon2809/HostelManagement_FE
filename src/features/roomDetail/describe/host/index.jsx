import React from 'react';
import PropTypes from 'prop-types';
import './host.scss';

Host.propTypes = {

};

function Host(props) {
    return (
        <div className='host'>
            <div className='hostItem'>
                <h3>Host</h3>
                <div className="row ">
                    <img src="./images/room1.png" alt className="img-fluid" />
                    <div className='col'>
                        <h4>Phu Son</h4>
                        <i className="fa fa-phone mr-2"></i>0914360736
                    </div>

                </div>

                <p>View 1 more news</p>
            </div>
        </div>
    );
}

export default Host;