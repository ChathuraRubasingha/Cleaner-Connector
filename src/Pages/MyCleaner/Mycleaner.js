import React from "react";
import Layout from "../../Componants/Layout/Layout";
import "./Mycleaner.css";
import Filter from "../../Componants/Filter/Filter";

function Mycleaner() {
  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Cleaners </p>
        <button className="btn btn-primary">Add</button>
      </div>
      <div>
        <Filter />
      </div>
    </Layout>
  );
}

export default Mycleaner;
