import React from "react";
import useForm from "../../../components/Hooks/useForm";

Edit.prototype = {};

function Edit() {
  const formCreateRoom = () => {
    console.log("Form values", values);
  };
  const { handleChange, errors, values, handleSubmitUpdate } =
    useForm(formCreateRoom);
  return (
    <div className="form-group">
      <div className="welcome-table w-75 m-auto">
        <form onSubmit={handleSubmitUpdate}>
          <div className="form-group">
            <label for="fullName" className="col-form-label">
              Full name
            </label>
            <input
              type="text"
              class="form-control"
              name="fullName"
              placeHolder="Enter your full name"
              onChange={handleChange}
            />
            {errors.fullName && <p>{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label for="email" className="col-form-label">
              Email
            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-group">
            <label for="phone" className="col-form-label">
              Phone
            </label>
            <input
              class="form-control"
              type="text"
              name="phone"
              placeholder="Enter your phone"
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label for="address" className="col-form-label">
              Address
            </label>
            <input
              class="form-control"
              type="text"
              name="address"
              placeholder="Enter your address"
              onChange={handleChange}
            />
            {errors.address && <p>{errors.address}</p>}
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-primary">
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Edit;
