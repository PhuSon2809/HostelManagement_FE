import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import "./category.scss";

Category.propTypes = {};

function Category(props) {
  return (
    <div className="category mb-4">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Account Information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Change Password</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Category;
