"use client";
import { FC } from "react";
import Slider from "react-slick";
import { centerSlider } from "../slider-options";
import BackgroundDiv from "@/utils/HOC/background-div";
import TooltipIcons from "../tooltips-icons";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";
import Img from "@/utils/BackgroundImageRatio";

const SliderCenter: FC<ISliderCenterProps> = ({ centerData, titleClass, background, divClass, icons }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <Slider {...centerSlider} className="cab-slider center-slider-cab arrow-classic topTour mt-0">
      {centerData.map((data: IExploreProps,index) => (
        <div key={index}>
          <div className={divClass}>
            {background ? <Img src={data.img} className="img-fluid blur-up lazyload bg-img"  /> : <img src={data.img} className="mx-auto" alt="" />}
            <div className="content">
              <h5>{data.title}</h5>
              <h6>
                start {symbol}
                {(currencyValue * 5).toFixed(0)} / per km
              </h6>
            </div>
            {icons && (
              <>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
                <TooltipIcons />
              </>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCenter;
