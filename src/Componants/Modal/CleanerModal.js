import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CreateForm from "./CreateForm";
import PRIMARY from "../../Theme/palette";

function CleanerModal(props) {
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Cleaner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} style={{backgroundColor:PRIMARY.black, color:PRIMARY.white, border:'none'}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CleanerModal;
