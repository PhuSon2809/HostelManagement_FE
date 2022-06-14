import React from 'react';
import PropTypes from 'prop-types';
import './describe.scss';
import RoomImage from './roomImage';
import Host from './host';
import Place from '../../../components/listType';
import Menu from './menu';

Discribe.propTypes = {

};

function Discribe(props) {
    return (
        <div className='containers'>
            <div className="row">
                <RoomImage />
            </div>
            <div className="row">
                <Menu />
            </div>
            <div className="row">
                <div className="col-12 col-md-9">

                </div>
                <div className="col-12 col-md-3 p-0">
                    <Host />
                </div>
            </div>
        </div>
    );
}

export default Discribe;