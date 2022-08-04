import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Pagination,
  Box,
  Popper,
  Grow,
  MenuItem,
  TextField,
  Paper,
  ClickAwayListener,
  MenuList,
  Typography,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  DialogActions,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  CardActionArea,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CircularProgress from "@mui/material/CircularProgress";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  createBill,
  deleteBill,
  getBills,
  getBillsByHostel,
  getBillsByHostelAndRoom,
} from "../../../redux/actions/ownerBill";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Layout/css/owner.css";
import { getHostelByAccountId } from "../../../redux/actions/ownerHostel";
import { getRoomByAccountId } from "../../../redux/actions/ownerRoom";
import formatDate from "../../../utils/formatDate";
import formatPrize from "../../../utils/formatPrize";

ListBillManagement.prototype = {};

const TextFieldStyle = styled(TextField)(() => ({
  height: "3rem",
  width: "100%",
  margin: "10px 0",
}));

function ListBillManagement() {
  const current = useSelector((state) => state.login.infoUser);
  const listBills = useSelector((state) => state.ownerBill.bills);
  const listRoom = useSelector((state) => state.ownerRoom.rooms);
  const totalRecord = useSelector((state) => state.ownerBill.totalRecord);
  const listHostel = useSelector((state) => state.ownerHostel.hostels);

  const [active, setActive] = useState("hostel");
  const [hostelSelected, setHostelSelected] = useState({});
  const [hostelIdSelected, setHostelIdSelected] = useState("");
  const [openFormCreateBill, setOpenFormCreateBill] = useState(false);
  const [value, setValue] = useState("select");
  const [inputValue, setInputValue] = useState("");
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 8,
  });
  const [service, setService] = useState("");
  const [roomChange, setRoomChange] = useState("");

  console.log("listBills: ", listBills);
  console.log("listRoom: ", listRoom);

  useEffect(() => {
    dispatch(getHostelByAccountId(current.id, filters));
  }, []);

  // CUT TEXT
  const truncate = (input) => {
    if (input.length > 19) {
      return input.substring(0, 70) + "...";
    } else {
      return input;
    }
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRoomByAccountId(current.id, hostelSelected.id, filters));
  // }, [hostelSelected]);

  useEffect(() => {
    dispatch(getBills(current.id, filters));
  }, []);

  const [openSelectHostel, setOpenSelectHostel] = useState(false);
  const handleClose = () => {
    setOpenSelectHostel(false);
    setOpenFormCreateBill(false);
    setOpenConfirm(false);
  };
  const handleClickOpenSelectHostel = () => {
    setOpenSelectHostel(true);
  };

  const handleClickSelectHostel = (hostel) => {
    console.log("hostel after Click: ", hostel);
    setHostelSelected(hostel);
    setOpenSelectHostel(false);
    setOpenFormCreateBill(true);
    dispatch(getRoomByAccountId(current.id, hostel.id, filters));
  };
  console.log("hostelSelected: ", hostelSelected);

  // SELECT SERVICE
  const handleChangeService = (event) => {
    setService(event.target.value);
  };

  // SELECT SERVICE
  const handleChangeRoom = (event) => {
    setRoomChange(event.target.value);
  };

  const { register, handleSubmit } = useForm({});

  const submitForm = async (data) => {
    console.log("form data: ", data);
    try {
      const newBill = {
        id: "string",
        serviceId: service,
        roomId: roomChange,
        date: data.createDate,
        quantity: data.quantity,
        price: data.price,
        total: data.total,
        status: true,
      };
      dispatch(createBill(newBill, hostelSelected.id, current.id));
      console.log("newBill: ", newBill);
      setOpenFormCreateBill(false);
      await Swal.fire(
        "Create bill successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      console.log("failed to create bill: ", error);
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handlePageChange = (e, page) => {
    //     const newFilter = {
    //         pageIndex: page,
    //         pageSize: 8,
    //     }
    //     dispatch(getRoomByAccountId(current.id, newFilter));
    //     setFilters(prevFilters => ({
    //         ...prevFilters,
    //         pageIndex: page
    //     }))
  };

  // ================HOSTEL STATE=============================
  const anchorRefHostel = useRef(null);
  const [selectedHostel, setSelectedHostel] = useState("SELECT HOSTEL");
  const [openHostel, setOpenHostel] = useState(false);
  const [filterHostel, setFiltersHostel] = useState({
    pageIndex: 1,
    pageSize: 9,
  });

  const handleClickhostelItem = (event, id, name) => {
    console.log("hostel id click: ", id);
    setSelectedHostel(name);
    setHostelIdSelected(id);
    const newFilter = {
      pageIndex: 1,
      pageSize: 9,
    };
    dispatch(getBillsByHostel(current.id, id, newFilter));
    dispatch(getRoomByAccountId(current.id, id, filters));
    setFiltersHostel((prevFilters) => ({
      ...prevFilters,
      pageIndex: 1,
    }));
    console.log("filtersHostel: ", filterHostel);
    setOpenHostel(false);
  };
  // Hanle selected Group
  const handleToggleGroup = () => {
    setOpenHostel((prevOpen) => !prevOpen);
    if (active !== "hostel") {
      setActive("hostel");
    }
  };

  const handleCloseHostel = (event) => {
    if (
      anchorRefHostel.current &&
      anchorRefHostel.current.contains(event.target)
    ) {
      return;
    }
    setOpenHostel(false);
  };

  // ================ROOM STATE=============================
  const anchorRefRoom = useRef(null);
  const [selectedRoom, setSelectedRoom] = useState("SELECT ROOM");
  const [roomSelected, setRoomSelected] = useState();
  const [openRoom, setOpenRoom] = useState(false);
  const [activeRoom, setActiveRoom] = useState("room");
  const [filterRoom, setFilterRoom] = useState({
    pageIndex: 1,
    pageSize: 9,
  });

  const handleClickRoomItem = (event, id, name) => {
    console.log("Room id click: ", id);
    setSelectedRoom(name);
    setRoomSelected(id);
    const newFilter = {
      pageIndex: 1,
      pageSize: 9,
    };
    dispatch(
      getBillsByHostelAndRoom(current.id, hostelIdSelected, id, newFilter)
    );
    setFilterRoom((prevFilters) => ({
      ...prevFilters,
      pageIndex: 1,
    }));
    console.log("filterRoom: ", filterRoom);
    setOpenRoom(false);
  };
  // Hanle selected Room
  const handleToggleRoom = () => {
    setOpenRoom((prevOpen) => !prevOpen);
    if (activeRoom !== "room") {
      setActiveRoom("room");
    }
  };

  const handleCloseRoom = (event) => {
    if (anchorRefRoom.current && anchorRefRoom.current.contains(event.target)) {
      return;
    }
    setOpenRoom(false);
  };

  // =====================================================
  const [openConfirm, setOpenConfirm] = useState(false);
  const [billClicked, setBillClicked] = useState({});
  const handleOpenConfirmDelete = (bill) => {
    setOpenConfirm(true);
    setBillClicked(bill);
  };
  const handleDeleteBill = async () => {
    try {
      const newFilter = {
        pageIndex: 1,
        pageSize: 9,
      };
      dispatch(
        deleteBill(
          billClicked.id,
          current.id,
          hostelSelected.id,
          roomSelected,
          newFilter
        )
      );
      // dispatch(deleteBill(billClicked.id));
    } catch (error) {
      console.log(error);
    }
    setOpenConfirm(false);
  };

  return (
    <>
      <div className="title-page mb-2">
        <ManageAccountsIcon />
        <span>Bill Management</span>
      </div>

      {/* BUTTON */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="split button"
            sx={{ marginRight: "10px" }}
          >
            <Button
              ref={anchorRefHostel}
              className={active == "hostel" && "active"}
              size="small"
              aria-controls={openHostel ? "split-button-group" : undefined}
              aria-expanded={openHostel ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="group"
              onClick={handleToggleGroup}
            >
              <GroupIcon />{" "}
              <span style={{ marginLeft: "5px" }}>{selectedHostel}</span>{" "}
              <ArrowDropDownIcon />
            </Button>

            <Popper
              open={openHostel}
              anchorEl={anchorRefHostel.current}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseHostel}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {listHostel?.map((hostel, index) => (
                          <MenuItem
                            key={index}
                            // selected={index === selectedIndex}
                            onClick={(event) =>
                              handleClickhostelItem(
                                event,
                                hostel.id,
                                hostel.name
                              )
                            }
                          >
                            {hostel.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </ButtonGroup>

          {selectedHostel === "SELECT HOSTEL" ? (
            <></>
          ) : (
            <ButtonGroup variant="contained" aria-label="split button">
              <Button
                ref={anchorRefRoom}
                className={activeRoom == "room" && "active"}
                size="small"
                aria-controls={openRoom ? "split-button-group" : undefined}
                aria-expanded={openRoom ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="room"
                onClick={handleToggleRoom}
              >
                <GroupIcon />{" "}
                <span style={{ marginLeft: "5px" }}>{selectedRoom}</span>{" "}
                <ArrowDropDownIcon />
              </Button>
              <Popper
                open={openRoom}
                anchorEl={anchorRefRoom.current}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseRoom}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {listRoom?.map((room, index) => (
                            <MenuItem
                              key={index}
                              // selected={index === selectedIndex}
                              onClick={(event) =>
                                handleClickRoomItem(event, room.id, room.name)
                              }
                            >
                              {room.name}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </ButtonGroup>
          )}
        </Box>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpenSelectHostel} className="active">
            <WorkspacePremiumIcon />
            <span style={{ marginLeft: "5px" }}>Create new Bill</span>
          </Button>
        </ButtonGroup>
      </Box>

      {/* TABLE VIEW */}
      <div className="row">
        {/* <div className="card-box"> */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Hostel's name</th>
                <th>Room's name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listBills &&
                listBills.map((bill, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{bill.room.hostel.name}</td>
                    <td>{bill.room.name}</td>
                    <td>{bill.service.name}</td>
                    <td>{formatDate(bill.date)}</td>
                    <td>{bill.quantity}</td>
                    {/* <td>{bill.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td> */}
                    <td>{formatPrize(bill.price)}</td>
                    <td>{formatPrize(bill.total)}</td>
                    {/* <td>{bill.total}</td> */}

                    <td>
                      <Link to={`/owner/bill/update/${bill.id}`}>
                        <a className="btn btn-edit">
                          <Tooltip title="Edit Bill">
                            <EditIcon />
                          </Tooltip>
                        </a>
                      </Link>

                      <a
                        className="btn btn-disable"
                        onClick={() => handleOpenConfirmDelete(bill)}
                      >
                        <Tooltip title="Delete bill">
                          <DeleteIcon />
                        </Tooltip>
                      </a>
                    </td>
                  </tr>
                ))}

              {listBills.length < 1 && (
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={Math.ceil(totalRecord / filters.pageSize)}
              // color="secondary"
              page={filters.pageIndex}
              onChange={handlePageChange}
            />
          </Box>
        </div>
        {/* </div>  */}
      </div>

      {/* DIALOG SELECT HOSTEL */}
      <Dialog open={openSelectHostel} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          SELECT YOUR HOSTEL TO CREATE BILL
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
                    onClick={() => handleClickSelectHostel(hostel)}
                  >
                    <CardMedia
                      sx={{ marginTop: "30px" }}
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

      {/* DIALOG CREATE BILL */}
      <Dialog
        open={openFormCreateBill}
        onClose={handleClose}
        fullWidth="true"
        maxWidth="lg"
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          Create bill for {hostelSelected.name} hostel
        </DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            {/* SERVICE INPUT */}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel id="demo-simple-select-label">
                Bill's Service
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={service}
                label="Bill's Service"
                onChange={handleChangeService}
              >
                {hostelSelected.services?.map((svc, index) => (
                  <MenuItem key={index} value={svc.id}>
                    {svc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* ROOM INPUT */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Room</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={roomChange}
                label="Room"
                onChange={handleChangeRoom}
              >
                {listRoom?.map((room, index) => (
                  <MenuItem key={index} value={room.id}>
                    {room.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* DATE TIME FIELD */}
            <FormControl fullWidth>
              <TextField
                {...register("createDate")}
                id="datetime-local"
                type="datetime-local"
                name="createDate"
                label="Create Date"
              ></TextField>
            </FormControl>

            {/* QUANTITY */}
            <TextFieldStyle
              {...register("quantity")}
              autoComplete="off"
              fullWidth
              label="Quantity"
              id="outlined-basic"
              variant="outlined"
              margin="normal"
            />

            {/* PRICE */}
            <TextFieldStyle
              {...register("price")}
              autoComplete="off"
              fullWidth
              label="Price"
              id="outlined-basic"
              variant="outlined"
              margin="normal"
            />

            {/* TOTAL */}
            <TextFieldStyle
              {...register("total")}
              autoComplete="off"
              fullWidth
              label="Total"
              id="outlined-basic"
              variant="outlined"
              margin="normal"
            />
          </DialogContent>

          <DialogActions>
            <Button
              type="submit"
              className="btn-create"
              variant="contained"
              fullWidth
            >
              Create Bill
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* DIALOG COMFIRM DELETE BILL */}
      <Dialog open={openConfirm} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          Are you sure to delete {billClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <ShowImage images={billClicked?.images} /> */}
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteBill}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default ListBillManagement;
