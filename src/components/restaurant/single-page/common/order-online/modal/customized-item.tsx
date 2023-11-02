"use client"
import { FC, useState } from "react";
import { AddToCart } from "@/constant/constant";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import BodyContent from "./modal-body";

const CustomizedItemsModal: FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);

  const handleModalClose = () => {
    setModal(false);
    setOpen(true);
  };

  const handleMinusClick = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    if (quantity === 0) {
      setOpen(false);
    }
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setOpen(true);
  };

  return (
    <>
      <div className="addtocart_btn">
        <button className="add_cart" data-bs-toggle="modal" data-bs-target="#customized" title="Add to cart" tabIndex={0} onClick={() => setModal(true)}>
          add * <span>customized</span>
        </button>
        <div className={`qty-box cart_qty ${open ? "open" : ""}`}>
          <div className="input-group">
            <button type="button" className="btn qty-left-minus" data-type="minus" data-field="" tabIndex={0} onClick={handleMinusClick}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
            <input type="text" name="quantity" className="form-control input-number qty-input" value={quantity} tabIndex={0} readOnly />
            <button type="button" className="btn qty-right-plus" data-type="plus" data-field="" tabIndex={0} onClick={handlePlusClick}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <Modal className="video-modal" size="xl" isOpen={modal} toggle={() => setModal(false)} modalTransition={{ timeout: 100 }}>
        <ModalHeader>
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Veg Cheese Quesadillas
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}></button>
        </ModalHeader>
        <ModalBody>
          <BodyContent />
        </ModalBody>
        <ModalFooter>
          <button type="button" data-bs-dismiss="modal" className="btn add__button btn-solid" onClick={() => handleModalClose()}>
            {AddToCart}
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CustomizedItemsModal;
