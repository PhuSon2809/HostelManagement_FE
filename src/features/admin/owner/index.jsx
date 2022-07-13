import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { IconButton, Avatar, Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deactiveAccount, getAccounts } from '../../../redux/actions/account';
import { useState } from 'react';
import { getListOwner } from '../../../redux/actions/adminOwner';


OwnerManagement.propTypes = {
    
};

function OwnerManagement(props) {
    
    const state = useSelector(state => state.adminOwner)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListOwner())
    }, [])


    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState("md");
    const [open, setOpen] = useState(false);
    const [itemClick, setItemClick] = useState({});


    const [filters, setFilters] = useState({
        PageNumber: 1,
        PageSize: 9
    });

    const handleOpenConfirm = (item) => {
        setOpen(true)
        setItemClick(item)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDisable = () => {
        // dispatch(deactiveAccount(itemClick.id))
        // setOpen(false)
    }

    const handlePageChange = (e, page) => {
        // const newFilter = {
        //     PageNumber: page,
        //     PageSize: 9,
        // }
        // dispatch(getAccounts(newFilter));
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     PageNumber: page
        // }))
    }


    return (
        <>
        <div className="title-page">
            <ManageAccountsIcon />
            <span>Owner management</span>
        </div>
        <div className="card-box">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.owners && state.owners.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <Avatar src={item.avatar} contained alt="avatar" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>

                                    <td>
                                        {
                                            item.status === true ?
                                                <label className="label label-active">{item.status}</label> :
                                                <label className="label label-disabled">{item.status}</label>
                                        }
                                    </td>
                                    {
                                         <td>{item.gender}</td>
                                    }
                                    <td>
                                        <Link to={`/admin/account/${item.id}`}>
                                            <a className="btn btn-edit" >
                                                <Tooltip title="Edit">
                                                    <EditIcon />
                                                </Tooltip>
                                            </a>
                                        </Link>
                                        {
                                            item.status == 'Active' ?
                                                <a className="btn btn-disable">
                                                    <Tooltip title="Disable account">
                                                        <LockIcon />
                                                    </Tooltip>
                                                </a>
                                                :
                                                <a className="btn btn-disable" >
                                                    <Tooltip title="Enable account">
                                                        <LockOpenIcon />
                                                    </Tooltip>
                                                </a>
                                        }
                                    </td>
                                </tr>
                            ))
                        }

                        {
                            state.owners.length < 1 &&
                            <tr>
                                <td colSpan="7">
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CircularProgress />
                                    </Box>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
                <Box >
                    <Pagination
                        count={Math.ceil(state.count / filters.PageSize)}
                        color="secondary"
                        page={filters.PageNumber}
                        onChange={handlePageChange}
                    />
                </Box>
            </div>
        </div>

        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            <DialogTitle
                sx={{
                    textAlign: "center",
                    borderBottom: "1px solid #d3d3d3",
                }}
            >
                Are you sure to disable {itemClick.name}
            </DialogTitle>
            <DialogContent sx={{ marginTop: "10px", display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Avatar src={itemClick.avatar} alt="avatar" sx={{ position: 'static !important', mr: 2, width: '100px', height: '100px' }}></Avatar>
            </DialogContent>


            <DialogActions>
                <Button color="inherit" onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleDisable}>
                    Disable
                </Button>
            </DialogActions>
        </Dialog>
    </>
    );
}

export default OwnerManagement;