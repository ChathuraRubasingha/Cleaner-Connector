import React from "react";
import Layout from "../../Componants/Layout/Layout";
import "./Mycleaner.css";
import Filter from "../../Componants/Filter/Filter";
import Table from "../../Componants/Table/Table";
import PRIMARY from "../../Theme/palette";

function Mycleaner() {
  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Cleaners </p>
        <button
          className="btn btn-primary"
          style={{
            border:"none",
            backgroundColor: PRIMARY.darkGray,
            padding: "0 20px",
            color: PRIMARY.white,
            fontWeight: "500",
          }}
        >
          Add New
        </button>
      </div>
      <div>
        <Filter />
        <Table />
      </div>
    </Layout>
  );
}

export default Mycleaner;
