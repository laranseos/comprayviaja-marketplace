"use client";
import { FC, useEffect, useState } from "react";
import { propertySlider } from "@/components/common/slider-options";
import Img from "@/utils/BackgroundImageRatio";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";

const SliderImage: FC<ISliderImageProps> = ({ imageSectionData, classSlide }) => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    setTimeout(() => setDisplay(true), 500);
  }, [imageSectionData]);
  if (!display) {
    return <div style={{ height: "60vh" }}></div>;
  }

  return (
    <>
      <Gallery>
        <Slider {...propertySlider} className={`${classSlide}`}>
          {imageSectionData.map((data: IImageSectionProps ,i) => (
            <Item original={data.img} width="1200" height="800" key={i}>
              {({ ref, open }) => (
                <div key={data.id} onClick={open} ref={ref as React.MutableRefObject<HTMLImageElement>}>
                  <Img src={data.img} className="img-fluid bg-img w-100" alt="" />
                  <h6 className="view-all">{data.title}</h6>
                </div>
              )}
            </Item>
          ))}
        </Slider>
      </Gallery>
    </>
  );
};

export default SliderImage;
