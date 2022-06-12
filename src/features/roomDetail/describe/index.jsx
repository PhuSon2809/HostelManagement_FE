import React from 'react';
import PropTypes from 'prop-types';
import RoomImage from './roomImage';
import Host from './host';
import Place from '../../../components/listType';

Discribe.propTypes = {

};

function Discribe(props) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-9">
                    <RoomImage />
                </div>
                <div className="col-12 col-md-3">
                    <Host />
                    <Place />
                </div>
            </div>
        </div>
    );
}

export default Discribe;