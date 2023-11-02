"use client";
import { FC } from "react";
import RestaurantProducts from "@/components/common/elements/product-box-6/restaurant-product";
import { slide3 } from "@/components/common/slider-options";
import Slider from "react-slick";

interface ISpecialImageProps {
  data: IRestaurantProps[];
}
const SpecialImage: FC<ISpecialImageProps> = ({ data }) => {
  return (
    <div className="special-section related-box ratio3_2 grid-box">
      <Slider {...slide3} className="slider-3 no-arrow">
        {data.map((item: IRestaurantProps,index) => (
          <div key={index}>
            <RestaurantProducts data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialImage;
