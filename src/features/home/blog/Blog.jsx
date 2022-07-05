import React from 'react';
import PropTypes from 'prop-types';
import './blog.scss';

Blog.propTypes = {

};

function Blog(props) {
    return (
        <div className="blog">
            <div className="row row-content align-self-center">
                <div className="col-12">
                    <h1 className="titles">Blogs</h1>
                </div>
                <div className="col-12 col-md-6 mt-3 mb-3">
                    <img src="./images/hostel1.png" alt className="rounded" />
                </div>
                <div className="col-12 col-md-6 mb-3 ml-auto">
                    <h1 className="name">Go Green Hostel</h1>
                    <p> <i className="fa fa-newspaper-o" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium a obcaecati dolor dicta dignissimos, doloremque suscipit non est voluptatem nisi
                        maxime alias minima magnam iste, exercitationem soluta reiciendis quaerat fuga.</p>
                    <p> <i className="fa fa-newspaper-o" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit non assumenda, illum blanditiis nam, quia porro officiis expedita, explicabo aspernatur
                        maxime? Rem, quo. Dolore distinctio sint ipsum unde culpa molestiae.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;