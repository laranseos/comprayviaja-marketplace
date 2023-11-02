"use client"
import { FC } from "react";
import { Modal, ModalBody } from "reactstrap";

interface IVideoPorps {
  modal: boolean;
  toggle: () => void;
}
const VideoModal: FC<IVideoPorps> = ({ modal, toggle }) => {
  return (
    <Modal modalClassName="video-modal" centered size="lg" fade isOpen={modal} toggle={toggle}>
      <ModalBody>
        <button onClick={toggle} type="button" className="btn-close">
          <span>×</span>
        </button>
        <iframe src="https://www.youtube.com/embed/ezuKIzXJuz8" allowFullScreen></iframe>
      </ModalBody>
    </Modal>
  );
};

export default VideoModal;
