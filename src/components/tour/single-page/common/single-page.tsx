"use client";
import { useEffect, FC } from "react";
import ProductBox from "@/components/common/elements/product-box/product-box";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getTourData } from "@/redux-toolkit/tour-api";
import BookingJourney from "./sidebar/booking-journey";
import TabContentComponent from "./tab-content";
import Slider from "react-slick";
import { slide2 } from "@/components/common/slider-options";
import Description from "./sticky/sticky-content";
import NewsLatterContent from "@/components/common/news-latter/page";

const SinglePage: FC<ISinglePageProps> = ({ tab, side }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <section className="single-section small-section bg-inner">
      <div className="container">
        <div className="row">
          <div className={`col-xl-3 col-lg-4  ${side === "right" ? "order-1" : ""}`}>
            <div className="sticky-cls-top">
              <BookingJourney />
              <NewsLatterContent titleClass="single-sidebar p-0" />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            {tab ? (
              <div className="description-section tab-section">
                <TabContentComponent data={data} />
              </div>
            ) : (
              <Description data={data} />
            )}

            <div className="special-section related-box ratio3_2 grid-box">
              <Slider {...slide2} className="slider-3 no-arrow">
                {data.map((items,index) => (
                  <ProductBox data={items} view="minimal" key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
