import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import ImageSlider from "../image-slider";
import { IExtendedProps } from "../element";
import Link from 'next/link'

const CabGridProduct: FC<IExtendedProps> = ({ data, grid, view }) => {
  return (
    <>
      <div className={`${grid.gridSize === 3 && "col-xl-4"} ${grid.gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6 popular grid-item wow fadeInUp`} >
        <div className="special-box cab-box">
          <div className="special-img">
            {view === "slider" ? (
              <ImageSlider images={data?.sliderImg} />
            ) : (
              <a href="#">
                <Img src={data?.gridImg} className="img-fluid" alt="" />
              </a>
            )}

            <div className="top-icon">
              <a href="#" className="" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                <i className="far fa-heart"></i>
              </a>
            </div>
          </div>
          <div className="special-content">
            <a href="#">
              <h5>{data?.name}</h5>
            </a>
            <ul>
              <li>
                type : <span>{data?.cabType}</span>
              </li>
              <li>
                per mile/KM : <span>${data?.fare}</span>
              </li>
              <li>
                passenger : <span>{data?.capacity}</span>
              </li>
              <li>
                luggage : <span>{data?.luggage}</span>
              </li>
              <li>
                gearbox : <span>{data?.option}</span>
              </li>
            </ul>
            <div className="button-botton">
              <Link href="/cab/single-detail" className="btn btn-solid color1">
                details
              </Link>
              <Link href="/cab/booking" className="btn btn-solid color1">
                book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabGridProduct;
