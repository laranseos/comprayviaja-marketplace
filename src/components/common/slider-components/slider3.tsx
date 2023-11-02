"use client";
import Slider from "react-slick";
import { slide1 } from "../slider-options";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import YouTubeVideoModal from "./YouTubeVideoModal";
import Link from 'next/link';

const SliderThree: FC<ISliderThree> = ({ slideData, playButton }) => {
  const { symbol, currencyValue } = useSelector(
    (state: RootState) => state.currency
  );
  const [modalToggle, setModalToggle] = useState(false);
  const toggleModal = () => setModalToggle(!modalToggle);
  return (
    <>
      <Slider {...slide1}>
        {slideData.map((banner: IRoomSuitsProps,index) => (
          <div key={index}>
            <div className="row">
              <div className="col-lg-7 offset-lg-4 col-md-10 offset-md-1">
                <div className="ticket-box">
                  <div className="ticket-title">
                    <h6>{banner.responsiveDesc}</h6>
                    <span>
                      <i className={banner.icon}></i>
                    </span>
                  </div>
                  <div className="image-box">
                    <Img src={banner.img} className="img-fluid" alt="" />
                    {playButton && (
                      <a href="#js" className="video-icon" onClick={toggleModal}>
                        <span />
                      </a>
                    )}
                  </div>
                  <div className="content">
                    <div className="detail">
                      <h4>
                        <span>
                          {symbol}
                          {(currencyValue * banner.price).toFixed(2)}
                        </span>{" "}
                        {banner.per}
                      </h4>
                      <h2>{banner.title}</h2>
                      {banner.shortDescription && (
                        <h6>
                          {banner.shortDescription}{" "}
                          <span>{banner.shortDescriptionSpan}</span>
                        </h6>
                      )}
                      <p>{banner.description}</p>
                      <Link href="/pages/other-pages/contact-us-1" className="btn btn-solid">
                        {banner.btn}
                      </Link>
                    </div>
                    <div className="barcode-design">
                      <Img
                        src={"/assets/images/barcode.png"}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <YouTubeVideoModal isOpen={modalToggle} toggle={toggleModal} />
    </>
  );
};

export default SliderThree;
