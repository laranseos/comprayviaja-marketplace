import React from "react";
import FooterContent from "./common/footer-content";
import CopyRightFooter from "./common/copyright-footer";

const FooterComponent: React.FC<IFooterComponentProps> = ({ place, footerClass }) => {
  return (
    <footer className={`${footerClass && footerClass}`}>
      <FooterContent place={place} />
      <CopyRightFooter />
    </footer>
  );
};

export default FooterComponent;
