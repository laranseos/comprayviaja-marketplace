import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Link from 'next/link';

const BannerCab: FC<IBannerCabProps> = ({ title }) => {
  return (
    <section className="breadcrumb-section flight-sec pt-0">
      <Img src="/assets/images/cab/breadcrumb.jpg" className="bg-img img-fluid" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-right breadcrumb-content pt-0">
              <div>
                <h2>{title}</h2>
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCab;
