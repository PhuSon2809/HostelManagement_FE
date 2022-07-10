import React from "react";
import PropTypes from "prop-types";
import "./listOption.scss";

ListOption.propTypes = {};

function ListOption(props) {
  return (
    <div className="listOption">
      <div className="sidebar p-3 mt-md-5 mt-4">
        <h3>Filter by price</h3>
        <div className="filter">
          <input type="checkbox" />
          <p>10 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>20 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>30 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>40 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>50 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>60 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>70 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>80 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>90 USD</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>100 USD</p> <span>(0)</span>
        </div>
      </div>

      <div className="sidebar p-3 mt-4">
        <h3>Filter by area</h3>
        <div className="filter">
          <input type="checkbox" />
          <p>≤ 30 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>30 - 50 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>50 - 80 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>80 - 100 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>100 - 150 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>150 - 200 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>200 - 250 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>250 - 300 m²</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>300 - 500 m²</p> <span>(0)</span>
        </div>
      </div>
    </div>
  );
}

export default ListOption;
