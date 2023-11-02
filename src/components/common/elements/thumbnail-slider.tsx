"use client";
import React, { useState, useEffect, FC } from "react";
import Slider from "react-slick";
import { sliderFor, sliderNav } from "../slider-options";
import { IThumbnailSliderProps } from "./element";

const ThumbnailSlider: FC<IThumbnailSliderProps> = ({ images, view, videoData }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();


  return (
    <>
      {Array.isArray(images) ? (
        <>
          <div>
            <Slider className="slider-for slick-video mt-4" {...sliderFor} asNavFor={nav2} ref={(slider: any) => setNav1(slider)}>
              {images?.map((data, i) => (
                <div key={i}>
                  {view === "video" && i === 0 ? (
                    <video autoPlay muted loop id="block" style={{ height: "300px" }}>
                      <source src={videoData} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  ) : (
                    <img src={data?.img} className="img-fluid blur-up lazyloaded" alt="" />
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <Slider className="slider-nav" {...sliderNav} asNavFor={nav1} ref={(slider: any) => setNav2(slider)}>
              {images.map((data, i) => (
                <div key={i} >
                  <img src={data.img} className="img-fluid blur-up lazyloaded" alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ThumbnailSlider;
