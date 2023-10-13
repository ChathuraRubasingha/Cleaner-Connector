import React from "react";
import Layout from "../../Componants/Layout/Layout";
import "./SiteArea.css";
import FilterSite from "../../Componants/FilterSite/FilterSite";
import SiteTable from "../../Componants/SiteTable/Table";
import AreaTable from "../../Componants/AreaTable/AreaTable";

function SiteArea() {
  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Sites </p>
        <p>ABC Corporation </p>
        <button
          className="btn btn-primary"
          style={{
            padding: "0 20px",
            color: "white",
            fontWeight: "500",
          }}
        >
          Add New
        </button>
      </div>
      <div>
        {/* <FilterSite /> */}
        <AreaTable />
      </div>
    </Layout>
  );
}

export default SiteArea;
