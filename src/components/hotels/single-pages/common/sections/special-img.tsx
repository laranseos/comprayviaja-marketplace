"use client";
import Rating from "@/components/common/rating";
import { slide3 } from "@/components/common/slider-options";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Link from "next/link";

const SpecialImage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hotel);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <div className="special-section related-box ratio3_2 grid-box">
      <Slider {...slide3} className="slider-3 no-arrow">
        {data.map((item,index) => (
          <div key={index}>
            <div className="special-box p-0">
              <div className="special-img">
                <Link href="/hotel/single-page/image-box">
                  <Img src={item.img} className="img-fluid bg-img" alt="" />
                </Link>
                <div className="top-icon">
                  <Link href="/hotel/single-page/image-box" className="" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
              </div>
              <div className="special-content">
                <Link href="/hotel/single-page/image-box">
                  <h5>
                    {item.title}{" "}
                    <span>
                      <i className="fas fa-map-marker-alt"></i> Newyork
                    </span>
                  </h5>
                </Link>
                <p>Lorem Ipsum is simply dummy text the printing Ipsum is simply Lorem Ipsum is simply dummy text of the ..............</p>
                <div className="bottom-section">
                  <Rating rang={"26412 review"} />
                  <div className="price">
                    <del>$1300</del>
                    <span>$1245</span>
                    <div className="facility-detail">
                      <span>swimming</span>
                      <span>parking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialImage;
