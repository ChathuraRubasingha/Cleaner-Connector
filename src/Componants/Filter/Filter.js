import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter-wrapper p-3">
      <div className="row">
        <div className="col">
          <select className="form-select">
            <option selected>Select Name</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select Site</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select Address</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
