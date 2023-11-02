"use client";
import { FC, Fragment } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";

const SliderOne: FC<ISliderOneProps> = ({ tourData, classTitle, slideCom, slideClass }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <Fragment>
      <Slider {...slideCom} className={slideClass}>
        {tourData.map((data: IExploreProps,index) => (
          <div key={index}>
            <div className={classTitle}>
              <div className="tourImg bg-size">
                <Img src={data.img} className="img-fluid  bg-img" alt="" />
              </div>
              <div className="tourContent">
                <h3>{data.title}</h3>
                <h6>
                  starting from {symbol}
                  {(currencyValue * 5000).toFixed(0)}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default SliderOne;
