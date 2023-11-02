"use client"
import { FC } from "react";
import { Modal, ModalBody } from "reactstrap";
import Filters from "@/components/hotels/filters/page";

const MapModal: FC<IModalProps> = ({ modal, setMapModal, children, value, type }) => {
  return (
    <Modal className="video-modal" size="xl" isOpen={modal} toggle={setMapModal} modalTransition={{ timeout: 100 }}>
      <ModalBody>
        <button onClick={() => setMapModal(false)} type="button" className="btn-close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <Filters value={value} popular={true} type={type} />
            </div>
            <div className="col-xl-8 col-lg-7 map-section map mt-0">{children}</div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default MapModal;
