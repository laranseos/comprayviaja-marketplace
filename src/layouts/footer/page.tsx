import { FC } from "react";
import FooterComponent from "./footer";
import FooterTwo from "./footer2";

interface IFooterMainProps {
  footerType?: string;
  footerPlaceCom?: boolean;
}
const FooterMain: FC<IFooterMainProps> = ({ footerType, footerPlaceCom }) => {
  return footerType !== "footer2" ? <FooterComponent place={footerPlaceCom} /> : <FooterTwo place={footerPlaceCom} />;
};

export default FooterMain;
