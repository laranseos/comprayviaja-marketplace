"use client";
import { slide1 } from "@/components/common/slider-options";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/HOC/NoSsr";
import { FC } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";

const TopSlider:FC = () => {
  const imgData = ["/assets/images/portfolio/13.jpg", "/assets/images/tour/spain.jpg"];
  return (
    <Gallery>
      <NoSsr>
        <Slider className="slide-1 arrow-dark" {...slide1}>
          {imgData.map((data, i) => (
            <Item key={i} original={data} width="1000" height="550">
              {({ ref, open }) => (
                <div ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open}>
                  <Img src={data} alt="" className="img-fluid " />
                </div>
              )}
            </Item>
          ))}
        </Slider>
      </NoSsr>
    </Gallery>
  );
};

export default TopSlider;
