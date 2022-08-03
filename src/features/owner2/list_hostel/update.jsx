import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import { showPrize } from '../../../redux/actions/prize';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router';
import HostelAPI from '../../../apis/hostelApi';
import FormUpdateHostel from './formUpdate';


export default function UpdateHostel() {

    // const state = useSelector(state => state.prize);
    // const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const hostelId = params.id;
    console.log("hostelId: ", hostelId);

    const [hostel, setHostel] = useState({});

    console.log("hostel: ", hostel);

    const fetchData = async () => {
        const result = await HostelAPI.getHostelById(hostelId);
        setHostel(result);
      };
      useEffect(() => {
        try {
          fetchData();
        } catch (error) {
          console.log("Fail to get hostel");
        }
      }, [hostelId]);

    return (
        <>
            <div className="title-page">
                <ManageAccountsIcon />
                <span>Update Hostel</span>
            </div>

            <div className="card-box-custom">
                <FormUpdateHostel hostel={hostel} />
            </div>
        </>
    );
}
