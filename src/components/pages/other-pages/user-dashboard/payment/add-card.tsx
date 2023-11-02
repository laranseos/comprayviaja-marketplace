"use client"
import { AddNewCard } from "@/constant/constant";
import { FC } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import FooterModal from "../common/footer-modal";

const CardModal: FC<ICardModalProps> = ({ modal, setModal }) => {
  return (
    <Modal className="video-modal" centered size="lg" isOpen={modal} toggle={() => setModal(false)} modalTransition={{ timeout: 100 }}>
      <ModalHeader toggle={()=>setModal(!modal)}>
        <h5 className="modal-title">{AddNewCard}</h5>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <div className="form-group">
            <label htmlFor="a-month">card type</label>
            <select id="a-month" className="form-control">
              <option selected>{AddNewCard}...</option>
              <option>credit card</option>
              <option>debit card</option>
              <option>debit card with ATM pin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="a-na">name on card</label>
            <input type="text" className="form-control" id="a-na" />
          </div>
          <div className="form-group">
            <label htmlFor="a-n">card number</label>
            <input type="text" className="form-control" id="a-n" />
          </div>
          <div className="row">
            <div className="form-group col-md-8">
              <label htmlFor="a-e">expiry date</label>
              <input type="text" className="form-control" id="a-e" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="a-c">cvv</label>
              <input type="password" maxLength={3} className="form-control" id="a-c" />
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

export default CardModal;
