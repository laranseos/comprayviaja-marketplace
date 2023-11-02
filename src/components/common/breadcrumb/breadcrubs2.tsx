import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";
import { FC } from "react";

interface IBreadcrumbTwoProps {
  title: string;
  subTitle?: string;
}
const BreadcrumbTwo: FC<IBreadcrumbTwoProps> = ({ title, subTitle }) => {
  return (
    <section className="breadcrumb-section small-sec flight-sec pt-0">
      <Img src="/assets/images/flights/flight-breadcrumb2.jpg" className="bg-img img-fluid " alt="" />
      <div className="content-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/home/flight/modern">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/flight/listing/right-sidebar">flights</Link>
                  </li>
                  <li className="breadcrumb-item">{title}</li>
                  {subTitle && <li className={`breadcrumb-item ${subTitle ? "active" : ""}`}>{subTitle}</li>}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbTwo;
