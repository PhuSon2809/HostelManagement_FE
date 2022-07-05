import React from 'react'
import PropTypes from 'prop-types';
import './content_header.scss'

Content_header.prototype = {

}

function Content_header() {
    return (
        <div>
            <div className="content-header row">
                <div className="col-12 col-xl-7 links-content">
                    <a href="#">Room 1 people</a>
                    <a href="#">Room 2 people</a>
                    <a href="#">Room 3 people</a>
                </div>
                <div className="col-12 col-xl-5 input-group">
                    <input type="text" class="form-control" placeHolder="Search" />
                    <button type="submit" className="btn btn-primary">Search</button>

                </div>
            </div>
        </div>
    )
}
export default Content_header;