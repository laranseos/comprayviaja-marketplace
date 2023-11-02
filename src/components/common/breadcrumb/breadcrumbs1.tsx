import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";
import { FC } from "react";

interface IBreadcrumbProps {
  title: string;
  subTitle: string;
  bannerImg: string;
  mainTitle?: string;
}
const BreadcrumbOne: FC<IBreadcrumbProps> = ({ title, subTitle, bannerImg, mainTitle }) => {
  return (
    <section className="breadcrumb-section pt-0 bg-size">
      <Img src={bannerImg} className="bg-img" alt="" />
      <div className="breadcrumb-content dark-content">
        <div>
          <h2>{title}</h2>
          <nav aria-label="breadcrumb" className="theme-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">subTitle</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {mainTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOne;
