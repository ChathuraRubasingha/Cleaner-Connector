import React, { useState } from "react";
import Layout from "../../Componants/Layout/Layout";
import "./Mysites.css";
import FilterSite from "../../Componants/FilterSite/FilterSite";
import SiteTable from "../../Componants/SiteTable/Table";

function Mysites() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Sites</p>
        <button
          className="btn btn-primary"
          style={{
            padding: "0 20px",
            color: "white",
            fontWeight: "500",
          }}
          onClick={openModal}
        >
          Add New
        </button>
      </div>
      <div>
        <FilterSite />
        <SiteTable />
      </div>
      {isModalOpen && (
        <div
          className="modal fade show" // Add "show" class to display the modal
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addNewSiteModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewSiteModalLabel">
                  Add New Site
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form for Adding a New Site */}
                <form>{/* ... (your form fields) */}</form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Mysites;
