"use client"
import { FC } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import EditProfileForm from "./EditProfileForm";

const EditProfile: FC<EditProfileInterFace> = ({ open, toggle }) => {
  return (
    <Modal centered size="lg" isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h5 className="modal-title">Edit Profile</h5>
      </ModalHeader>
      <ModalBody>
        <EditProfileForm />
      </ModalBody>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggle}
        >
          Close
        </button>
        <button type="button" className="btn btn-solid">
          Save changes
        </button>
      </div>{" "}
    </Modal>
  );
};

export default EditProfile;
