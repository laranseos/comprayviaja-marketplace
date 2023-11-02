import { FC } from "react";

const FooterModal: FC<ICardModalProps> = ({ setModal }) => {
  return (
    <>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModal(false)}>
        Close
      </button>
      <button type="button" className="btn btn-solid">
        add card
      </button>
    </>
  );
};

export default FooterModal;
