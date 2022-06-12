import React from 'react';
import PropTypes from 'prop-types';
import './room.scss';

Room.propTypes = {

};

function Room(props) {
    return (
        <div>
            <div className='room row ml-3 mr-3'>
                <div className="col-12 col-md-5">
                    <div className='image'>
                        <img src="./images/room1.png" alt className="img-fluid img1" />
                        <img src="./images/room2.png" alt className="img-fluid img2" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content mt-2 mt-md-0">
                        <h3>Deluxe Queen Room With Street View</h3>
                        <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <div className="house-price">
                            <p>30 m2</p>
                            <p>Thanh pho Ho Chi Minh</p>
                            <p className='red'>&amp; 100 <span>/ day</span></p>
                        </div>
                        <div className='text-center text-md-left'>
                            <a href="" className='btn '>View Detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='room row ml-3 mr-3'>
                <div className="col-12 col-md-5">
                    <div className='image'>
                        <img src="./images/room1.png" alt className="img-fluid img1" />
                        <img src="./images/room2.png" alt className="img-fluid img2" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content mt-2 mt-md-0">
                        <h3>Deluxe Queen Room With Street View</h3>
                        <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <div className="house-price">
                            <p>30 m2</p>
                            <p>Thanh pho Ho Chi Minh</p>
                            <p className='red'>&amp; 100 <span>/ day</span></p>
                        </div>
                        <div className='text-center text-md-left'>
                            <a href="" className='btn '>View Detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='room row ml-3 mr-3'>
                <div className="col-12 col-md-5">
                    <div className='image'>
                        <img src="./images/room1.png" alt className="img-fluid img1" />
                        <img src="./images/room2.png" alt className="img-fluid img2" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content mt-2 mt-md-0">
                        <h3>Deluxe Queen Room With Street View</h3>
                        <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <div className="house-price">
                            <p>30 m2</p>
                            <p>Thanh pho Ho Chi Minh</p>
                            <p className='red'>&amp; 100 <span>/ day</span></p>
                        </div>
                        <div className='text-center text-md-left'>
                            <a href="" className='btn '>View Detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='room row ml-3 mr-3'>
                <div className="col-12 col-md-5">
                    <div className='image'>
                        <img src="./images/room1.png" alt className="img-fluid img1" />
                        <img src="./images/room2.png" alt className="img-fluid img2" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content mt-2 mt-md-0">
                        <h3>Deluxe Queen Room With Street View</h3>
                        <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <div className="house-price">
                            <p>30 m2</p>
                            <p>Thanh pho Ho Chi Minh</p>
                            <p className='red'>&amp; 100 <span>/ day</span></p>
                        </div>
                        <div className='text-center text-md-left'>
                            <a href="" className='btn '>View Detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='room row ml-3 mr-3'>
                <div className="col-12 col-md-5">
                    <div className='image'>
                        <img src="./images/room1.png" alt className="img-fluid img1" />
                        <img src="./images/room2.png" alt className="img-fluid img2" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content mt-2 mt-md-0">
                        <h3>Deluxe Queen Room With Street View</h3>
                        <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <div className="house-price">
                            <p>30 m2</p>
                            <p>Thanh pho Ho Chi Minh</p>
                            <p className='red'>&amp; 100 <span>/ day</span></p>
                        </div>
                        <div className='text-center text-md-left'>
                            <a href="" className='btn text-center'>View Detail</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="btn-group mb-4" role="group" aria-label="First group">
                <button type="button" className="btn">1</button>
                <button type="button" className="btn">2</button>
                <button type="button" className="btn">3</button>
                <button type="button" className="btn">4</button>
            </div>
        </div>
    );
}

export default Room;