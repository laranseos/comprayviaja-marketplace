import { OurLocation } from "@/constant/constant";

const Location: React.FC = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-title">
        <h5>{OurLocation}</h5>
      </div>
      <div className="footer-content">
        <div className="footer-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
