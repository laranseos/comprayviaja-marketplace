import { FC } from "react";
import Rating from "../../rating";
import Img from "@/utils/BackgroundImageRatio";
import ImageSlider from "../image-slider";
import ThumbnailSlider from "../thumbnail-slider";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { IProductBoxProps } from "../element";
import Link from 'next/link';


const ProductBox: FC<IProductBoxProps> = ({ data, view }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  const price = data?.price ?? 0;

  return (
    <div className="special-box ">
      <div className="special-img">
        {view === "slider" ? (
          <ImageSlider images={data?.sliderImg} />
        ) : view === "multiple" || view === "video" ? (
          <ThumbnailSlider images={data?.multipleImg} view={view} />
        ) : (
          <Link href="/hotel/single-page/image-box">
            <Img src={data?.img} className="img-fluid blur-up lazyload bg-img" alt="" />
          </Link>
        )}
        <div className="top-icon">
          <a href="#" className="" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
            <i className="far fa-heart"></i>
          </a>
        </div>

        {view === "minimal" && (
          <div className="content-inner">
            <Link href="/tour/single-page/classic-design">
              <h5>Beautiful bali</h5>
            </Link>
            <h6>6N 7D</h6>
          </div>
        )}

        {view === "classic" && (
          <div className="content-inner">
            <Link href="/tour/single-page/classic-design">
              <h5>Beautiful bali</h5>
            </Link>
            <h6>6N 7D</h6>
          </div>
        )}
      </div>

      {view !== "minimal" && view !== "classic" ? (
        <div className="special-content">
          <Link href="/hotel/single-page/image-box">
            <h5>
              the venetian{" "}
              <span>
                <i className="fas fa-map-marker-alt"></i> Newyork
              </span>
            </h5>
          </Link>
          <p>Lorem Ipsum is simply dummy text the printing Ipsum is simply Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text the.</p>
          <div className="bottom-section">
            <Rating rang="26412 review" />
            <div className="price">
              <del>
                {symbol}
                {currencyValue && (currencyValue * 1300).toFixed(2)}
              </del>
              <span>
                {symbol}
                {currencyValue && (currencyValue * price).toFixed(2)}
              </span>

              <div className="facility-detail">
                <span>swimming</span>
                <span>parking</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {data.offer && <div className="label-offer">{data.label}</div>}
    </div>
  );
};

export default ProductBox;
