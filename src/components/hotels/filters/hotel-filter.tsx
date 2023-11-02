"use client";
import { FC, useState } from "react";
import Rating from "@/components/common/rating";
import { HotelDetailFilter } from "@/data/hotels/filter-data";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link'

const HotelFilter: FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="filter-block">
      <div className={`collection-collapse-block border-bottom-0 ${show? "open":""}`}>
        <h6 className="collapse-block-title" onClick={() => setShow(!show)}>
          hotels
        </h6>
        <div className={`collection-collapse-block-content pb-0${show? " d-none":""} `}>
          <div className="sidebar-hotels">
            {HotelDetailFilter.map((item: IHotelFilterProps,index) => (
              <div className="hotel-box"  key={index}>
                <div className="img-left">
                  <Img src={item.img} className="img-fluid" alt="" />
                </div>
                <div className="content-right">
                  <Link href="/hotel/single-page/image-box">
                    <h5>{item.name}</h5>
                  </Link>
                  <Rating />
                  <div className="price">
                    ${item.price} <span>/ per night</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFilter;
