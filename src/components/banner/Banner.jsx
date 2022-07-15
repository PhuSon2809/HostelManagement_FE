import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div className="banner" id="banner">
            <div className="content">
                <h1><span>welcome to</span> HOM</h1>
                <p className='d-none d-md-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore
                    nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam! Ipsam sed fugiat id explicabo repellendus minus amet velit sequi facilis adipisci.</p>
            </div>
        </div>
    );
}

export default Banner;