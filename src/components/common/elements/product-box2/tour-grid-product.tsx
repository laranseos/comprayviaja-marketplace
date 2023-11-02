import { FC } from "react";
import Link from 'next/link'
import Img from "@/utils/BackgroundImageRatio";
import ImageSlider from "../image-slider";
import ThumbnailSlider from "../thumbnail-slider";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";
import { IExtendedProps } from "../element";
import ProductList from "./ProductList";

const TourGridProduct: FC<IExtendedProps> = ({ data, grid, view }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);

  return (
    <div className={`${grid.gridSize === 3 && "col-xl-4"} ${grid.gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6  product-wrapper-grid special-section grid-box mt-0`}>
      <div className="special-box p-0">
        <div className="special-img">
          {view === "slider" ? (
            <ImageSlider images={data.sliderImg} />
          ) : view === "multiple" || view === "video" ? (
            <ThumbnailSlider images={data.multipleImg} view={view} />
          ) : (
            <Link href="/hotel/single-page/image-box">
              <Img src={data.img} className="img-fluid" alt="" />
            </Link>
          )}
          <div className="top-icon">
            <a href="#" className="" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="special-content">
          <Link href="/tour/single-page/classic-design">
            <h5>
              {data.title}
              <span>{data.span}</span>
            </h5>
          </Link>
          <div className="tour-detail">
            <h6>
              <i className="fas fa-plane-departure me-3"></i>
              {data.plane} <i className="fas fa-plane-arrival ms-3"></i>
            </h6>
            <div className="include-sec">
              <span>{data.include}</span>
              <ProductList/>
            </div>
            <div className="bottom-section">
              <div className="price">
                <h6>
                  <del>
                    {symbol}
                    {(currencyValue * 1300).toFixed(0)}
                  </del>
                  {symbol}
                  {(currencyValue * (data?.price || 0)).toFixed(0)}
                </h6>
                <span>price per person</span>
              </div>
            </div>
          </div>
        </div>
        {data.offer && <div className="label-offer">{data.label}</div>}
      </div>
    </div>
  );
};

export default TourGridProduct;
