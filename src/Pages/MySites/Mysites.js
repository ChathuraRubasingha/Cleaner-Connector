import React from "react";
import Layout from "../../Componants/Layout/Layout";
import "./Mysites.css";
import FilterSite from "../../Componants/FilterSite/FilterSite";
import SiteTable from "../../Componants/SiteTable/Table";

function Mysites() {
  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Sites </p>
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
        <FilterSite />
        <SiteTable />
      </div>
    </Layout>
  );
}

export default Mysites;
