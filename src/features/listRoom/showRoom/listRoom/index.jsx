import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Room from './room';

ListRoom.propTypes = {

};

function ListRoom(props) {
    return (
        <div className='listRoom'>
            <div className="row mt-4 ml-4">
                <Title />
            </div>
            <div className="row">
                <Room />
            </div>
        </div>
    );
}

export default ListRoom;