import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Banner from '../../components/banner';
import ListTitle from '../hostels/listTitle';
import ListBox from '../hostels/listBox';
import Place from '../../components/listType';

Hostel.propTypes = {

};

function Hostel(props) {
    return (
        <div>
            <Header />
            <Banner />
            <div className=' mt-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <ListTitle />
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-9 order-last order-md-first">
                            <ListBox />
                        </div>
                        <div className="col-12 col-md-3 order-first">
                            <Place />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hostel;