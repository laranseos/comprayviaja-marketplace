"use client"
import { Close, UpdateAddress } from "@/constant/constant";
import { FC } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CartModal: FC<IModalProps> = ({ modal, setMapModal, type }) => {
  return (
    <Modal className="video-modal" size="md" isOpen={modal} toggle={setMapModal} modalTransition={{ timeout: 100 }}>
      <ModalHeader toggle={()=>setMapModal(false)}>
        <h5 className="modal-title">{type}</h5>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <div className="form-group">
            <label htmlFor="e-na">Name</label>
            <input type="text" className="form-control" placeholder="Mark Jecno" id="e-na" />
          </div>
          <div className="form-group">
            <label htmlFor="e-n">Mobile No</label>
            <input type="text" className="form-control" placeholder="+91 123 - 456 - 7890" id="e-n" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="549 Sulphur Springs Road" />
          </div>
          <div className="row">
            <div className="form-group col-md-5">
              <label>City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label>State</label>
              <select className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Zip</label>
              <input placeholder="60515" type="text" className="form-control" />
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setMapModal(false)}>
          {Close}
        </button>
        <button type="button" className="btn btn-solid" onClick={() => setMapModal(false)}>
          {UpdateAddress}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CartModal;
