import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import { showPrize } from '../../../redux/actions/prize';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BillAPI from "../../../apis/billApi";
import RoomAPI from "../../../apis/roomApi";
import FormUpdateBill from "./formUpdate";

export default function UpdateBill() {
  const params = useParams();
  const dispatch = useDispatch();
  const billId = params.id;
  console.log("billId: ", billId);

  const [bill, setBill] = useState({});

  console.log("bill: ", bill);

  const fetchData = async () => {
    const result = await BillAPI.getHostelById(billId);
    setBill(result);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get bill");
    }
  }, [billId]);

  return (
    <>
      <div className="title-page">
        <ManageAccountsIcon />
        <span>Update Bill</span>
      </div>

      <div className="card-box-custom">
        <FormUpdateBill bill={bill} />
      </div>
    </>
  );
}
