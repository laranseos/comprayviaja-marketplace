import { centerSlider } from "@/components/common/slider-options";
import { centerSlides } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import React, { FC } from "react";
import Slider from "react-slick";


const BodyContent: FC = () => {
  return (
    <section className="p-0 center-slide">
      <Slider className="center-slider no-arrow" {...centerSlider}>
        {centerSlides.map((imgPath, i) => (
          <div key={i}>
            <div className="image-center">
              <Img src={imgPath} className="img-fluid bg-img" alt="" />
              <div className="center-content">
                <div>
                  <h3>luxury gateway</h3>
                  <h6>unmissable experience in vienna </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BodyContent;
