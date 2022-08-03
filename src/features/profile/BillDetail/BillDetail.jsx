import React from "react";
import PropTypes from "prop-types";
import "./billDetail.scss";
import currencyFormat from "../../../utils/formatPrize";

BillDetail.propTypes = {
  bill: PropTypes.object,
  index: PropTypes.number,
};

function BillDetail({ bill, index }) {
  return (
    <tr className="billDetail">
      <th scope="row">{index + 1}</th>
      <td>{bill.room.name}</td>
      <td>{bill.room.hostel.name}</td>
      <td>{bill.service.name}</td>
      <td>{bill.quantity}</td>
      <td>{currencyFormat(bill.price)}</td>
      <td>{currencyFormat(bill.total)}</td>
    </tr>
  );
}

export default BillDetail;
