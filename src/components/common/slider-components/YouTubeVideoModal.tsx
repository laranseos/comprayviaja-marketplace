"use client"
import { Modal, ModalBody} from "reactstrap";

interface YouTubeVideoModalInterface {
  isOpen: boolean;
  toggle: () => void;
}
const YouTubeVideoModal: React.FC<YouTubeVideoModalInterface> = ({isOpen,toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg" modalClassName="video-modal">
      <ModalBody>
        <button className="btn-close" onClick={toggle}>
          <span aria-hidden="true">×</span>
        </button>
        <iframe
          src="https://www.youtube.com/embed/ezuKIzXJuz8"
          allowFullScreen
        />
      </ModalBody>
    </Modal>
  );
};

export default YouTubeVideoModal;
