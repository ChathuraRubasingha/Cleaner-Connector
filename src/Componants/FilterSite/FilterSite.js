import React from "react";
import "./FilterSite.css";

function FilterSite() {
  return (
    <div className="filter-wrapper p-3">
      <div className="row">
        <div className="col">
          <select className="form-select">
            <option selected>Select Client</option>
            <option>Mark</option>
            <option>Jacob</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select Site</option>
            <option>Melburn</option>
            <option>Geelong</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select State</option>
            <option>Geelong1</option>
            <option>Geelong2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSite;
