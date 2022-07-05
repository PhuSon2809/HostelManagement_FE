import React from "react";
import useForm from "../../../../components/Hooks/useForm";

Create_Room.prototype = {};

function Create_Room() {
  const formCreateRoom = () => {
    console.log("Form values", values);
  };
  const { handleChange, errors, values, handleSubmitCreate } =
    useForm(formCreateRoom);
  return (
    <div className="form-group">
      <div className="welcome-table">
        <h3>Welcome, Full Name</h3>
        <hr />
        <div>
          <form onSubmit={handleSubmitCreate}>
            <div className="row">
              <div className="form-group col-5">
                <label for="name" className="col-form-label">
                  Tên phòng
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="roomName"
                  placeHolder="Tên phòng"
                  onChange={handleChange}
                />
                {errors.roomName && <p>{errors.roomName}</p>}
              </div>
              <div className="form-group col-5 offset-1">
                <label for="roomtypes" className="col-form-label">
                  Kiểu phòng
                </label>
                <div className="input-group">
                  <select name="roomtypes" id="roomtypes">
                    <option value="kieuphong1">Kiểu Phòng 1</option>
                    <option value="kieuphong2">Kiểu Phòng 2</option>
                    <option value="kieuphong3">Kiểu Phòng 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-5">
                <label for="acreage" className="col-form-label">
                  Diện tích
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="acreage"
                  placeHolder="Diện tích"
                  onChange={handleChange}
                />
                {errors.acreage && <p>{errors.acreage}</p>}
              </div>
              <div className="form-group col-5 offset-1">
                <label for="price" className="col-form-label">
                  Giá
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="price"
                  placeHolder="Giá"
                  onChange={handleChange}
                />
                {errors.price && <p>{errors.price}</p>}
              </div>
            </div>
            <div className="form-group">
              <label for="photo" className="col-form-label">
                Hình ảnh:
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="p-2"
                multiple
              />
            </div>
            <div className="submit-btn">
              <button type="submit" className="btn btn-primary">
                Create Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Create_Room;
