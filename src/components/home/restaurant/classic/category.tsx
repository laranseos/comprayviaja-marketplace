"use client";
import Rating from "@/components/common/rating";
import { slide3 } from "@/components/common/slider-options";
import TitleComponent from "@/components/common/title/title";
import { Best } from "@/constant/constant";
import { categoryData } from "@/data/home/restaurant/resatuarant-data";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Link from 'next/link';

const Category: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className=" category-section section-b-space ratio3_2">
      <div className="container">
        <TitleComponent title={Best} titleClass="title-3 rounded" subTitle="our special dishes" span="special" />
        <div className="row">
          <div className="col">
            <Slider {...slide3} className="slide-3 no-arrow">
              {categoryData.map((data,index) => (
                <Link href="/restaurant/listing/grid-view/grid-2" key={index}>
                  <div className="category-box">
                    <div className="side-effect"></div>
                    <div>
                      <Img src={data.img} alt="" className="img-fluid  bg-img" />
                      <div className="overlay"></div>
                    </div>
                    <div className="top-bar">
                      <span className="offer">offer</span>
                      <h5>
                        <del>
                          {symbol}
                          {(currencyValue * data.price).toFixed(0)}
                        </del>{" "}
                        {symbol}
                        {(currencyValue * data.disc).toFixed(0)}
                      </h5>
                    </div>
                    <div className="like-cls">
                      <i className="fas fa-heart">
                        <span className="effect"></span>
                      </i>
                    </div>
                    <div className="bottom-bar">
                      <div className="top">
                        <h5>{data.title}</h5>
                        <Rating />
                        <h6>{data.timer}</h6>
                      </div>
                      <p>{data.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
