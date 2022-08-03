import { TextField, Button, styled, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const TextFieldStyle = styled(TextField)(() => ({
  height: "3rem",
  width: "100%",
  margin: "10px 0",
}));

Create_Hostel.prototype = {};

function Create_Hostel() {
  // const formregister = () => {
  //   console.log("Form values", values);
  // };
  const { register, handleSubmit } = useForm({
    defaultValues: {
      hostelName: "",
      address: "",
      district: "",
      images: [],
    },
  });

  const submitForm = async (data) => {
    console.log("data: ", data);
  };
  return (
    <div className="welcome-table">
      <h3>Create Hostel</h3>
      <hr />
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
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
          <TextFieldStyle
            {...register("district")}
            autoComplete="off"
            fullWidth
            label="District"
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            className="btn-create"
            variant="contained"
            fullWidth
          >
            Create Hostel
          </Button>
        </form>
        {/* <form onSubmit={handleSubmitCreate(submitHostel)}>
          <div className="form-group">
            <label for="hostelName" className="col-form-label">
              Tên nhà trọ
            </label>
            <input
              type="text"
              class="form-control"
              name="hostelName"
              placeHolder="Tên nhà trọ"
              onChange={handleChange}
            />
            {errors.hostelName && <p>{errors.hostelName}</p>}
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label for="hostelAddress" className="col-form-label">
                Địa chỉ
              </label>
              <input
                type="text"
                class="form-control"
                name="hostelAddress"
                placeHolder="Địa chỉ"
                onChange={handleChange}
              />
              {errors.hostelAddress && <p>{errors.hostelAddress}</p>}
            </div>
            <div className="form-group col-5 offset-1">
              <label for="hostelQuan" className="col-form-label">
                Quận/Huyện
              </label>
              <div className="input-group">
                <select name="quan" id="quan">
                  <option value="tpThuDuc">Thành phố Thủ Đức</option>
                  <option value="quan1">Quận 1</option>
                  <option value="quan3">Quận 3</option>
                  <option value="quan4">Quận 4</option>
                  <option value="quan5">Quận 5</option>
                  <option value="quan6">Quận 6</option>
                  <option value="quan7">Quận 7</option>
                  <option value="quan8">Quận 8</option>
                  <option value="quan10">Quận 10</option>
                  <option value="quan11">Quận 11</option>
                  <option value="quan12">Quận 12</option>
                  <option value="quanBinhTan">Quận Bình Tân</option>
                  <option value="quanBinhThanh">Quận Bình Thạnh</option>
                  <option value="quanGoVap">Quận Gò Vấp</option>
                  <option value="quanPhuNhuan">Quận Phú Nhuận</option>
                  <option value="quanTanBinh">Quận Tân Bình</option>
                  <option value="quanTanPhu">Quận Tân Phú</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="photo" className="col-form-label">
              Photo:
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/png, image/jpeg"
              className="p-2"
              multiple
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-primary">
              Create Hostel
            </button>
          </div>
  </form> */}
      </div>
    </div>
  );
}
export default Create_Hostel;
