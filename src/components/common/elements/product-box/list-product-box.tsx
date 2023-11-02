import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Rating from "../../rating";
import ImageSlider from "../image-slider";
import ThumbnailSlider from "../thumbnail-slider";
import Button from "../../btn";
import { IListProductBoxProps } from "../element";
import Link from "next/link";

const ListPage: FC<IListProductBoxProps> = ({ data, view, type }) => {
  return (
    <div className="list-box col-12 popular grid-item wow fadeInUp list-slider" key={data.id}>
      <div className="list-img">
        {view === "slider" ? (
          <ImageSlider images={data?.sliderImg} />
        ) : view === "multiple" || view === "video" ? (
          <ThumbnailSlider videoData={data.video} images={data.multipleImg} view={view} />
        ) : (
          <Link href="/hotel/single-page/image-box">
            <Img src={data.img} className="img-fluid" alt="" />
          </Link>
        )}
      </div>
      <div className="list-content">
        <div>
          <Link href="/hotel/single-page/image-box">
            <h5>{data.title}</h5>
          </Link>
          <p>{data.place ? data.place : data.span}</p>
          {data.plane && (
            <h6>
              <i className="fas fa-plane-departure me-3"></i> {data.plane} <i className="fas fa-plane-arrival ms-3"></i>
            </h6>
          )}
          {type === "hotel" && <Rating rang="26412 review" />}
          {view === "multiple" || view === "video" ? <p className="hotel-info">{data.desc}</p> : ""}

          <div className="facility-icon">
            {data.iconImg?.map((imgData,index) => (
              <div className="facility-box" key={index}>
                <Img src={imgData.img} className="img-fluid" alt={imgData.title} />
                <span>{imgData.title}</span>
              </div>
            ))}
          </div>
          <div className="price">
            <del>$1300</del>${data.price} <span>/ per night</span>
            <p className="mb-0">login & unlock a secret deal</p>
          </div>
          {data.offerBox && (
            <div className="offer-box">
              <i className="fas fa-fire"></i> {data.offerBox}
            </div>
          )}
          <Link href="/hotel/booking/booking-page"><Button  btnClass={"btn btn-solid color1 book-now"} name={data.btn} /></Link>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
