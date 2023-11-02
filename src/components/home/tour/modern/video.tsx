"use client";
import { useState } from "react";
import CountdownComponent from "@/components/common/CountdownComponent";
import { BookNow, Honeymoon } from "@/constant/constant";
import VideoModal from "@/components/common/model/video-model";
import TextSplit from "@/components/common/text-split";
import BackgroundSection from "@/utils/HOC/background-section";
import Img from "@/utils/BackgroundImageRatio";
import Button from "@/components/common/btn";
import Link from 'next/link';
import useTimer from "@/components/common/CountdownComponent";

const Video = () => {
  const [days, hours, minutes, seconds] = useTimer(new Date("dec 1, 2022 16:37:52").getTime());
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <BackgroundSection img="/assets/images/mix/video-bg.jpg" imgHeight={741} imgWidth={2453} titleClass="video_section parallax-img" position="center">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="video-content">
                <div>
                  <h5>
                    It's limited seating! <span>Hurry up!!</span>
                  </h5>
                  <h2>
                    {Honeymoon} <span>$500</span>{" "}
                  </h2>
                  <p>Special honeymoon in May, Discover Thailand for 50 Customers with Discount 30%</p>
                  <div className='timer'>
                  <ul>
                    <li>
                      <span id='days'>{days}</span>days
                    </li>
                    <li>
                      <span id='hours'>{hours}</span>Hour
                    </li>
                    <li>
                      <span id='minutes'>{minutes}</span>min
                    </li>
                    <li>
                      <span id='seconds'>{seconds}</span>sec
                    </li>
                  </ul>
                </div>
                  <div className="bottom-section">
                    <Link href="/tour/booking/booking-page"><Button btnClass="btn btn-rounded btn-sm color1" name={`${BookNow} !!`} /></Link>
                    <div className="info-btn">
                      <h6>7 days &nbsp; | &nbsp; 8 nights</h6>
                    </div>
                    <div className="info-btn red-info">
                      <h6>2 person</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6 order-cls">
              <div className="video-image">
                <div className="side-effect"></div>
                <Img src="/assets/images/mix/video-image.jpg" className="img-fluid " alt="" />
                <div data-bs-toggle="modal" onClick={toggle} data-bs-target="#video" className="video-icon">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-text">
          <h6>
            <TextSplit text="limited time" />
          </h6>
        </div>
      </BackgroundSection>
      <VideoModal modal={modal} toggle={toggle} />
    </>
  );
};

export default Video;
