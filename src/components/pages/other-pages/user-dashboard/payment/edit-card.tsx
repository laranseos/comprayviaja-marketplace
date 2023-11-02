"use client"
import { EditYourCard } from "@/constant/constant";
import { FC } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import FooterModal from "../common/footer-modal";

const EditCardModal: FC<ICardModalProps> = ({ modal, setModal }) => {
  return (
    <Modal className="video-modal" centered size="lg" isOpen={modal} toggle={() => setModal(false)} modalTransition={{ timeout: 100 }}>
      <ModalHeader>
        <h5 className="modal-title">{EditYourCard}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">name on card</label>
            <input type="text" className="form-control" id="name" placeholder="Mark jecno" />
          </div>
          <div className="form-group">
            <label htmlFor="number">card number</label>
            <input type="text" className="form-control" id="number" placeholder="7451 2154 2115 2510" />
          </div>
          <div className="row">
            <div className="form-group col-md-8">
              <label htmlFor="expiry">expiry date</label>
              <input type="text" className="form-control" id="expiry" placeholder="12/23" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cvv">cvv</label>
              <input type="password" maxLength={3} className="form-control" id="cvv" placeholder="&#9679;&#9679;&#9679;" />
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <FooterModal setModal={setModal} />
      </ModalFooter>
    </Modal>
  );
};

export default EditCardModal;
