import Img from "@/utils/BackgroundImageRatio";
import { FC } from 'react';

const BannerBreadcrumbs: FC = () => {
  return (
    <section className="breadcrumb-section flight-sec pt-0">
      <Img src="/assets/images/flights/flight-breadcrumb.jpg" className="bg-img img-fluid " alt="" />
      <div className="flight run"></div>
    </section>
  );
};

export default BannerBreadcrumbs;
