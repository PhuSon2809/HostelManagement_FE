import React from "react";
import "./bill.scss";
import { Link } from "react-router-dom";

Bill.prototype = {};

function Bill() {
  const data = [
    { name: "Anom", avage: 19, link: "owner/bill/hostel1" },
    { name: "Megha", avage: 19, link: "owner/bill/hostel2" },
    { name: "Subham", avage: 25, link: "owner/bill/hostel3" },
  ];
  return (
    <div className="table">
      <h2>List Hostel Bill</h2>
      <hr />
      <div className="tab-pane">
        <table>
          <tr>
            <th>Tên nhà trọ</th>
            <th>Tổng tiền</th>
            <th>Link</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.avage}</td>
                <td>
                  <Link to={val.link}>{val.name}</Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Bill;
