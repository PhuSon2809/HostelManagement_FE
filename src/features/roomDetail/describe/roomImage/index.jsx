import PropTypes from 'prop-types';
import React from "react";
import "./roomImage.scss";

RoomImage.propTypes = {

};

function RoomImage(props) {
    return (
        <div className='roomImage'>
            <div className="nameTitle">
                <h3 className='d-inline'>Puda Vida Room</h3>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
            </div>
            <div className="grid-container">
                <div className="grid-item item1">
                    <img src="./images/room1.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item2">
                    <img src="./images/room2.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item3">
                    <img src="./images/room3.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item4">
                    <img src="./images/room4.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item5">
                    <img src="./images/room1.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item6">
                    <img src="./images/room2.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
                <div className="grid-item item7">
                    <img src="./images/room3.png" alt className="img-fluid" />
                    <div class="black"></div>
                </div>
            </div>
        </div>
    );
}

export default RoomImage;