"use client";

import VideoModal from "@/components/common/model/video-model";
import { LuxuryHotelBestResort, RelaxAndEnjoy } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import { useState } from "react";

const Video: React.FC = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <BackgroundSection titleClass="video-section parallax-img" img="/assets/images/hotel/background.jpg" imgWidth={1905} imgHeight={548} position="center">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="basic-section">
                <h2>{RelaxAndEnjoy}</h2>
                <h4>{LuxuryHotelBestResort}</h4>
                <div className="video-icon" onClick={toggle}>
                  <span />
                  <div className="animation-circle-inverse">
                    <i />
                    <i />
                  </div>
                </div>HomeBanner
              </div>
            </div>
          </div>
        </div>
      </BackgroundSection>
      <VideoModal modal={modal} toggle={toggle} />
    </>
  );
};

export default Video;
