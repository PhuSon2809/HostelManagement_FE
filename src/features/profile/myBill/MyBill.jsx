import React, { useState } from "react";
import "./myBill.scss";
import { Table } from "reactstrap";
import BillAPI from "../../../apis/billApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function MyBill(props) {
  const current = useSelector((state) => state.login.infoUser);
  const [bills, setBills] = useState([]);

  const fetchData = async () => {
    const billApi = await BillAPI.getBillById(current.id);
    setBills(billApi?.data);
    console.log("bills: ", bills);
  };

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log("Fail to get bills");
    }
  }, [current.id])

  return (
    <div className="myBill">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Date</th>
            <th>Room</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MyBill;
