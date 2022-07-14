import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import ListTitle from "./listTitle/ListTitle";
import ListBox from "./listBox/BoxContent";
import ListType from "./listType/ListType";
import HostelAPI from "../../apis/hostelApi";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const PaginationStyle = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  marginTop: "2rem",
}));

function Hostels(props) {
  const [hostels, setHostels] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 9,
  });

  const fetchData = async () => {
    const hostelsListApi = await HostelAPI.getHostels(filters);
    setHostels(hostelsListApi?.data);
    setCount(hostelsListApi?.totalRecord);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [filters]); // [] để thì sẽ gọi 1 một lần th

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  return (
    <div className="hostels">
      <Banner />
      <div className=" mt-4 mb-5">
        <div className="containers">
          <div className="row">
            <ListTitle />
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-9 order-last order-md-first">
              <ListBox hostels={hostels} />
              <PaginationStyle>
                <Pagination
                  count={Math.ceil(count / filters.pageSize)}
                  variant="outlined"
                  color="error"
                  page={filters.pageIndex}
                  onChange={handlePageChange}
                />
              </PaginationStyle>
            </div>
            <div className="col-12 col-md-3 order-first">
              <ListType />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hostels;
