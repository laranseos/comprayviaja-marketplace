"use client"
import React, { FC } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const PasswordModalShow: FC<MultipleModalInterFace> = ({ open, toggle }) => {
  return (
    <Modal centered isOpen={open} toggle={() => toggle("password")}>
      <ModalHeader toggle={() => toggle("password")}>
        <h5 className="modal-title">change password</h5>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="p-o">old password</label>
              <input type="email" className="form-control" id="p-o" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="p-n">enter new password</label>
              <input type="email" className="form-control" id="p-n" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="p-c">confirm your password</label>
              <input type="email" className="form-control" id="p-c" />
            </div>
          </div>
        </form>
      </ModalBody>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => toggle("password")}>Close</button>
        <button type="button" className="btn btn-solid">Save changes</button>
      </div>{" "}
    </Modal>
  );
};

export default PasswordModalShow;
