import React from 'react';
import PropTypes from 'prop-types';
import ListRoom from './listRoom';
import ListOption from './listOption';
import SlideRoom from './slideHostel';

ShowRoom.propTypes = {

};

function ShowRoom(props) {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-12 col-md-9 order-last order-md-first">
                    <ListRoom />
                </div>
                <div className="col-12 col-md-3">
                    <ListOption />
                </div>
            </div>
            <div className="row ml-2 mr-2 ml-md-0 mr-md-0">
                <SlideRoom />
            </div>
        </div>
    );
}

export default ShowRoom;