import React from "react";
import "./Filter.css";
import { Button } from "bootstrap";

function Filter() {
  return (
    <div className="filter-wrapper p-3">
      <div className="row">
        <div className="col">
          <select className="form-select">
            <option>hello</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option>hello</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option>hello</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
