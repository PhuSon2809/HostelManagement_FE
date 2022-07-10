import React from 'react'
import PropTypes from 'prop-types';
import './breadcrumb.scss'

Breadcrumb.prototype = {

}

function Breadcrumb() {
    const newLocal = '#';
    return (
        <div className='breadcrumb_d'>
        <div className="container-fluid">
            <ol className="breadcrumb">
                <li><a href="/home">Home</a></li>
                <li><a href={newLocal}>List Room</a></li>
                <li><a href={newLocal}>Room Detail</a></li>
                <li className="active">Booking</li>
            </ol>
        </div>
        </div>
    )
}
export default Breadcrumb;