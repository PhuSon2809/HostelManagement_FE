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
  TextField,
  styled,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  createHostel,
  deleteHostel,
  getHostelByAccountId,
} from "../../../redux/actions/ownerHostel";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import ShowImage from "../../../components/showImage";
import { Link } from "react-router-dom";

HostelManagement.prototype = {};

const TextFieldStyle = styled(TextField)(() => ({
  height: "3rem",
  width: "100%",
  margin: "10px 0",
}));

function HostelManagement() {
  const current = useSelector((state) => state.login.infoUser);
  const listHostel = useSelector((state) => state.ownerHostel.hostels);
  const totalRecord = useSelector((state) => state.ownerHostel.totalRecord);

  // console.log("current: ", current);
  // console.log("totalRecord: ", totalRecord);
  console.log("listHostel: ", listHostel);

  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [hostelClicked, setHostelClicked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenConfirm(false);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      hostelName: "",
      address: "",
      images: [],
    },
  });

  const submitForm = async (data) => {
    try {
      const newHostel = {
        id: "1",
        name: data.hostelName,
        address: data.address,
        accountId: current.id,
        status: true,
      };
      dispatch(createHostel(newHostel, current.id));
      console.log("newHostel: ", newHostel);
      setOpen(false);
      await Swal.fire(
        "Create hostel successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      console.log("failed to create hostel: ", error);
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
    dispatch(getHostelByAccountId(current.id, filters));
  }, []);

  const handlePageChange = (e, page) => {
    const newFilter = {
      pageIndex: page,
      pageSize: 8,
    };
    dispatch(getHostelByAccountId(current.id, newFilter));
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  const handleOpenConfirmDelete = (hostel) => {
    setOpenConfirm(true);
    setHostelClicked(hostel);
  };

  const handleDeleteHostel = () => {
    console.log("hostelClicked: ", hostelClicked);
    try {
      dispatch(deleteHostel(hostelClicked.id, current.id));
      setOpenConfirm(false);
      // await Swal.fire(
      //   "Delete hostel successfully",
      //   "Click button to continute!",
      //   "success"
      // );
    } catch (error) {
      // await Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Something wrong!",
      // });
    }
  };

  return (
    <>
      <div className="title-page mb-2">
        <ManageAccountsIcon />
        <span>Hostel Management</span>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50px",
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClickOpen} className="active">
            <WorkspacePremiumIcon />
            <span style={{ marginLeft: "5px" }}>Create new Hostel</span>
          </Button>
        </ButtonGroup>
      </Box>

      <div className="row">
        {listHostel &&
          listHostel?.map((hostel, index) => (
            <div key={index} className="col-5 col-md-3">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={hostel?.images[0]?.url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hostel?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {truncate(hostel?.address)}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button variant="outlined" size="small" color="secondary">
                    See more
                  </Button> */}
                  <Button variant="outlined" size="small" color="primary">
                    <Link to={`/owner/list_hostel/update/${hostel.id}`}>Update</Link>
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleOpenConfirmDelete(hostel)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Create Hostel</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent>
            <TextFieldStyle
              {...register("hostelName")}
              autoComplete="off"
              fullWidth
              label="Hostel name"
              id="outlined-basic"
              variant="outlined"
              margin="normal"
            />
            <TextFieldStyle
              {...register("address")}
              autoComplete="off"
              id="outlined-basic"
              fullWidth
              label="Address"
              variant="outlined"
              margin="normal"
            />
            {/* <TextFieldStyle
              {...register("district")}
              autoComplete="off"
              fullWidth
              label="District"
              variant="outlined"
              margin="normal"
            /> */}
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              className="btn-create"
              variant="contained"
              fullWidth
            >
              Create Hostel
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

      <Dialog open={openConfirm} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          Are you sure to delete {hostelClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ShowImage images={hostelClicked?.images} />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteHostel}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default HostelManagement;
