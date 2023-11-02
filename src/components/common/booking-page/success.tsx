import Button from "@/components/common/btn";
import { DownloadInvoice } from "@/constant/constant";
import { CloudBack, CloudFront, CloudMiddle, PlaneSVG } from "@/data/svg/flight-svg";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const SuccessPage: FC<ISuccessProps> = ({ title, svg, img }) => {
  return (
    <section className="section-b-space success-section">
      <div className="container">
        {svg && (
          <div className="animation">
            <CloudBack />
            <CloudMiddle />
            <div className="animation__plane--shadow"></div>
            <PlaneSVG />
            <CloudFront />
          </div>
        )}
        <div className="row success-detail mt-0">
          <div className="col">
            <Img src={img} className="img-fluid" alt="" />
            <h2>{title}</h2>
            <p>thank you for you payment. we have received your payment successfully. your transaction ID is "SHJG12155215", you will get an email invoice soon!</p>
            <Button btnClass="btn btn-solid color1" name={DownloadInvoice} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
