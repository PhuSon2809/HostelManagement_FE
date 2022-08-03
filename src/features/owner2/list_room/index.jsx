import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Typography,
  Avatar,
  TextField,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  CardActionArea,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  addNewUserToRoom,
  createRoom,
  deleteRoom,
  deleteUserFromRoom,
  getListUserByRoom,
  getRoomByAccountId,
  getRoomTypes,
} from "../../../redux/actions/ownerRoom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import ShowImage from "../../../components/showImage";
import { getHostelByAccountId } from "../../../redux/actions/ownerHostel";
import HostelForSelect from "./hostelForSelect";
import { Link } from "react-router-dom";
import { getListUser } from "../../../redux/actions/adminUser";

ListRoomManagement.prototype = {};

const TextFieldStyle = styled(TextField)(() => ({
  height: "3rem",
  width: "100%",
  margin: "10px 0",
}));

function ListRoomManagement() {
  const current = useSelector((state) => state.login.infoUser);
  const listRoom = useSelector((state) => state.ownerRoom.rooms);
  const roomtypes = useSelector((state) => state.ownerRoom.roomTypes);
  const listHostel = useSelector((state) => state.ownerHostel.hostels);
  const totalRecord = useSelector((state) => state.ownerRoom.totalRecord);
  const usersByRoom = useSelector((state) => state.ownerRoom.users);
  const allUsers = useSelector((state) => state.AdminUser.users);

  console.log("usersByRoom: ", usersByRoom);
  
  const [open, setOpen] = useState(false);
  const [openSelectHostel, setOpenSelectHostel] = useState(true);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openListMember, setOpenListMember] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [roomClicked, setRoomClicked] = useState(false);
  const [hostelSelected, setHostelSelected] = useState("");

  console.log("hostelSelected: ", hostelSelected);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenListHostel = () => {
    setOpenSelectHostel(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenConfirm(false);
    setOpenSelectHostel(false);
    setOpenListMember(false);
    setOpenAddMember(false);
  };

  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      roomName: "",
      roomType: "",
      roomArea: "",
      images: [],
    },
  });

  const submitForm = async (data) => {
    try {
      const newRoom = {
        id: "1",
        name: data.roomName,
        roomTypeId: type,
        hostelId: hostelSelected,
        status: true,
      };
      dispatch(createRoom(newRoom, hostelSelected, current.id));
      // dispatch(getRoomByAccountId(current.id, hostelSelected, filters));
      console.log("newRoom: ", newRoom);
      setOpen(false);
      await Swal.fire(
        "Create room successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      console.log("failed to create room: ", error);
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // CUT TEXT
  const truncate = (input) => {
    if (input.length > 19) {
      return input.substring(0, 70) + "...";
    } else {
      return input;
    }
  };

  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 8,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getRoomByAccountId(current.id, filters));
    dispatch(getHostelByAccountId(current.id, filters));
  }, []);

  useEffect(() => {
    dispatch(getRoomTypes(hostelSelected));
  }, [hostelSelected]);

  const handlePageChange = (e, page) => {
    const newFilter = {
      pageIndex: page,
      pageSize: 8,
    };
    dispatch(getRoomByAccountId(current.id, hostelSelected, newFilter));
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  const handleOpenConfirmDelete = (room) => {
    setOpenConfirm(true);
    setRoomClicked(room);
  };
  const handleOpenConfirmSee = (room) => {
    setOpenListMember(true);
    dispatch(getListUserByRoom(room.id));
    setRoomClicked(room);
  };
  // useEffect(() => {
  //   dispatch(getListUserByRoom(roomClicked.id));
  // }, [roomClicked])

  // Handle add new User to room
  const [value, setValue] = React.useState(allUsers[0]?.name);
  const [inputValue, setInputValue] = React.useState("");
  const handleOpenAddmember = (room) => {
    setOpenAddMember(true);
    dispatch(getListUser());
    setRoomClicked(room);
  };

  const handleAddNewUserToRoom = () => {
    const newUser = {
      id: "string",
      accountId: value.id,
      roomId: roomClicked.id,
    };
    dispatch(addNewUserToRoom(newUser));
    setOpenAddMember(false);
    // setRoomClicked(room);
  };

  const handleDeleteRoom = async () => {
    console.log("roomClicked: ", roomClicked);
    try {
      dispatch(deleteRoom(roomClicked.id, hostelSelected, current.id));
      setOpenConfirm(false);
      await Swal.fire(
        "Delete room successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something wrong!",
      });
    }
  };

  const handleClickSelectHostel = (hostelId) => {
    setHostelSelected(hostelId);
    dispatch(getRoomByAccountId(current.id, hostelId, filters));
  };

  return (
    <>
      <div className="title-page mb-2">
        <ManageAccountsIcon />
        <span>Room Management</span>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpenListHostel} className="active">
            <WorkspacePremiumIcon />
            <span style={{ marginLeft: "5px" }}>Select hostel</span>
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpen} className="active">
            <WorkspacePremiumIcon />
            <span style={{ marginLeft: "5px" }}>Create new Room</span>
          </Button>
        </ButtonGroup>
      </Box>

      <div className="row">
        {listRoom?.map((room, index) => (
          <div className="col-5 col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={room?.images[0]?.url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {room?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncate(room?.roomType.description)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleOpenAddmember(room)}
                >
                  Add member
                </Button>
                <Button variant="outlined" size="small" color="primary">
                  <Link to={`/owner/list_room/update/${room.id}`}>Update</Link>
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleOpenConfirmSee(room)}
                >
                  See member
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleOpenConfirmDelete(room)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>

      {/* DIALOG CREATE ROOM */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Create Room</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            <TextFieldStyle
              {...register("roomName")}
              autoComplete="off"
              fullWidth
              label="Room name"
              id="outlined-basic"
              variant="outlined"
              margin="normal"
            />
            {/* <TextFieldStyle
              {...register("roomType")}
              autoComplete="off"
              id="outlined-basic"
              fullWidth
              label="Room Type"
              variant="outlined"
              margin="normal"
            /> */}
            <TextFieldStyle
              {...register("Acreage")}
              autoComplete="off"
              fullWidth
              label="Room Acreage"
              variant="outlined"
              margin="normal"
            />

            {/* ==================================== */}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Room type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
              >
                {roomtypes?.map((roomtype, index) => (
                  <MenuItem value={roomtype.id}>{roomtype.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* ==================================== */}
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              className="btn-create"
              variant="contained"
              fullWidth
            >
              Create Room
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={Math.ceil(totalRecord / filters.pageSize)}
        // color="secondary"
        page={filters.pageIndex}
        onChange={handlePageChange}
      />

      {/* DIALOG SELECT HOSTEL */}
      <Dialog open={openSelectHostel} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          SELECT YOUR HOSTEL
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Grid container>
            {listHostel?.map((hostel, index) => (
              <Grid item xs={12}>
                <Card>
                  <CardActionArea
                    onClick={() => handleClickSelectHostel(hostel.id)}
                  >
                    <CardMedia
                    sx={{marginTop: '30px'}}
                      component="img"
                      height="200px"
                      image={hostel.images[0].url}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {hostel.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG COMFIRM DELETE ROOM */}
      <Dialog open={openConfirm} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          Are you sure to delete {roomClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ShowImage images={roomClicked?.images} />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteRoom}>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG SEE MORE MEMBER */}
      <Dialog
        open={openListMember}
        onClose={handleClose}
        fullWidth="true"
        maxWidth="lg"
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          List member of {roomClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            // display: "flex",
            alignItems: "center",
            // justifyContent: "space-around",
          }}
        >
          {/* <ShowImage images={roomClicked?.images} /> */}
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
                  {usersByRoom &&
                    usersByRoom.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="avatar">
                            <Avatar src={item?.account?.avatar} contained='true' alt="avatar" />
                          </div>
                        </td>
                        <td>{item?.account?.name}</td>
                        <td>{item?.account?.phone}</td>
                        <td>
                          {item.account?.status ? (
                            <label className="label label-active">
                              {item?.status}
                            </label>
                          ) : (
                            <label className="label label-disabled">
                              {item?.account?.status}
                            </label>
                          )}
                        </td>
                        {<td>{item?.account?.gender}</td>}
                        <td>
                          <a
                            className="btn btn-disable"
                            onClick={() => {setOpenListMember(false)
                              dispatch(
                                deleteUserFromRoom(item.id, roomClicked.id)
                              )}
                              
                            }
                          >
                            <Tooltip title="Enable account">
                              <DeleteIcon />
                            </Tooltip>
                          </a>
                        </td>
                      </tr>
                    ))}

                  {usersByRoom?.length < 1 && (
                    <tr>
                      <td colSpan="7">
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <CircularProgress />
                        </Box>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                  count={Math.ceil(totalRecord / filters.pageSize)}
                  // color="secondary"
                  page={filters.pageIndex}
                  onChange={handlePageChange}
                />
              </Box> */}
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* DIALOG ADD MEMBER */}
      <Dialog
        open={openAddMember}
        onClose={handleClose}
        fullWidth="true"
        maxWidth="xl"
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          Add member for {roomClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={allUsers}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={option.avatar}
                  // srcSet={}
                  alt=""
                />
                {option.name} 
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select member to add"
                inputProps={{
                  ...params.inputProps,
                  // autoComplete: "new-password", // disable autocomplete and autofill
                }}
                onChange={handleChangeUserName}
              />
            )}
          /> */}
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            getOptionLabel={(option) => option.name}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={allUsers}
            sx={{ width: 300 }}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={option?.avatar ? option.avatar : ''}
                  // srcSet={}
                  alt=""
                />
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select member to add"
                inputProps={{
                  ...params.inputProps,
                  // autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="inherit" onClick={handleAddNewUserToRoom}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default ListRoomManagement;
