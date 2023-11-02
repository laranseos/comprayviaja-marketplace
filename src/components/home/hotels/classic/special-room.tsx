"use client";
import { FC } from "react";
import Slider from "react-slick";
import { Our, SpecialRooms, Special } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import { slide3 } from "@/components/common/slider-options";
import Rating from "@/components/common/rating";
import { specialRoomsData } from "@/data/home/hotel/hotel-data";
import Animation from "@/components/common/animation/animation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const SpecialRoomsComponent: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="section-b-space special-section ratio2_3 animated-section">
      <Animation />
      <div className="container">
        <TitleComponent title={Our} subTitle={SpecialRooms} span={Special} titleClass={"title-3"} />

        <div className="slide-3">
          <Slider {...slide3}>
            {specialRoomsData.map((room: ISpecialRoomsProps,index) => (
              <div key={index}>
                <div className="special-box p-0">
                  <div className="special-img">
                    <Link href="/hotel/listing/grid-view/2-grid">
                      <Img src={room.src} className="img-fluid bg-img" alt="" />
                    </Link>
                    <div className="label">
                      <i className="fas fa-percent"></i>
                      <h3>
                        <del>
                          {symbol}
                          {(currencyValue * room.oldPrice).toFixed(0)}
                        </del>{" "}
                        {symbol}
                        {(currencyValue * room.newPrice).toFixed(0)}
                      </h3>
                    </div>
                  </div>
                  <div className="special-content">
                    <Link href="/hotel/listing/grid-view/2-grid">
                      <h5>{room.title}</h5>
                    </Link>
                    <p>{room.description}</p>
                    <div className="bottom-part">
                      <Rating />
                      <div className="package-cls">{room.package}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default SpecialRoomsComponent;
