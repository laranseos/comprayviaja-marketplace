"use client"
import React, { FC } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const PhoneModalShow: FC<MultipleModalInterFace> = ({ open, toggle }) => {
  return (
    <Modal centered isOpen={open} toggle={() => toggle("phone no")}>
      <ModalHeader toggle={() => toggle("phone no")}>
        <h5 className="modal-title">change phone no</h5>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="ph-o">old phone no</label>
              <input type="number" className="form-control" id="ph-o" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="ph-n">enter new phone no</label>
              <input type="number" className="form-control" id="ph-n" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="ph-c">confirm your phone no</label>
              <input type="number" className="form-control" id="ph-c" />
            </div>
          </div>
        </form>
      </ModalBody>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => toggle("phone no")}>Close</button>
        <button type="button" className="btn btn-solid">
          Save changes
        </button>
      </div>{" "}
    </Modal>
  );
};

export default PhoneModalShow;
