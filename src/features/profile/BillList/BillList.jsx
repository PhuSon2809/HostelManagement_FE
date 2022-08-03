import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import BillAPI from "../../../apis/billApi";
import BillDetail from "../BillDetail/BillDetail";
import "./billList.scss";

function BillList(props) {
  const current = useSelector((state) => state.login.infoUser);
  const [bills, setBills] = useState([]);

  const fetchData = async () => {
    const billApi = await BillAPI.getBillById(current.id);
    setBills(billApi.data);
    console.log("billApi: ", billApi);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get bills");
    }
  }, [current.id]);

  return (
    <div className="myBill">
      {bills.length <= 0 ? (
        <h2 className="Opps">
          <span>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70 }} />
            Opps
          </span>{" "}
          - You have no have another bills
        </h2>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Room</th>
              <th>Hostel</th>
              <th>Service</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <BillDetail key={bill.id} bill={bill} index={index} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default BillList;
