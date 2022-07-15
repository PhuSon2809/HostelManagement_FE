import React from 'react';
import PropTypes from 'prop-types';
import './utilities.scss';
import { SvgIcon } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CellWifiIcon from '@mui/icons-material/CellWifi';

Utilities.propTypes = {
    
};

function Utilities(props) {
    return (
        <div className='utilities' id='utilities'>
            <div className='item-service'>
                <ElectricBoltIcon fontSize='large'/> <span>Electricity</span>
            </div>
            <div className='item-service'>
                <InvertColorsIcon fontSize='large'/> <span>Water</span>
            </div>
            <div className='item-service'>
                <LocalParkingIcon fontSize='large'/> <span>Parking</span>
            </div>
            <div className='item-service'>
                <CleaningServicesIcon fontSize='large'/> <span>Cleaning</span>
            </div>
            <div className='item-service'>
                <AttachMoneyIcon fontSize='large'/> <span>Cost of living</span>
            </div>
            <div className='item-service'>
                <CellWifiIcon fontSize='large'/> <span>Wifi</span>
            </div>
        </div>
    );
}

export default Utilities;