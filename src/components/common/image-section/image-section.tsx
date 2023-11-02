"use client";

import { FC } from "react";
import SliderImage from "./slider-image";

const ImageSection: FC<IImageSection> = ({ imagesection1, imagesection2, imagesection3 }) => {
  return (
    <div className="image_section ">
      <div className="row">
        <div className="col-sm-8">
          <SliderImage imageSectionData={imagesection1} classSlide="arrow-dark zoom-gallery ratio2_3" />
        </div>
        <div className="col-sm-4 d-none d-sm-block">
          <div className="row">
            <div className="col-12 ratio_59">
              <SliderImage imageSectionData={imagesection2} classSlide="zoom-gallery no-arrow" />

              <SliderImage imageSectionData={imagesection3} classSlide="zoom-gallery no-arrow m-cls" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
