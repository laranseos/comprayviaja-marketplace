"use client";
import Button from "@/components/common/btn";
import TitleComponent from "@/components/common/title/title";
import { Our, Subscribe } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import Link from "next/link";

const SubscribeComponent: React.FC = () => {
  return (
    <BackgroundSection titleClass="medium-section parallax-img subscribe-section" img="/assets/images/hotel/subscribe-bg.jpg" imgWidth={1920} imgHeight={348} position="center">
      <div className="container">
        <TitleComponent title={Our} subTitle={Subscribe} titleClass={"title-1"} h2Class="text-white" />
        <div className="row">
          <div className="offset-xl-3 col-xl-6 col-md-8 offset-md-2 col-10 offset-1">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <Link href="/" className="btn btn-solid">{Subscribe}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default SubscribeComponent;
