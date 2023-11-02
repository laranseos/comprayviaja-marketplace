import Image from "next/image";
import FooterContent from "./common/footer-content";

const FooterTwo: React.FC<IFooterComponentProps> = ({ place }) => {
  return (
    <footer
      className="effect-cls-up footer-bg"
      style={{
        backgroundImage: `url(${"/assets/images/tour/background/13.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "block",
      }}>
      <Image src="/assets/images/tour/background/13.jpg" className="img-fluid bg-img" alt="" style={{ display: "none" }} width={200} height={200} />
      <FooterContent place={place} />
    </footer>
  );
};

export default FooterTwo;
