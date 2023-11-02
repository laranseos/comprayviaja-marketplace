import Rating from "@/components/common/rating";
import { serviceData } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Link from "next/link";

const ServiceContent: FC = () => {
  return (
    <section className="section-b-space dark-cls">
      <Img src="/assets/images/cab/grey-bg.jpg" alt="" className="img-fluid bg-img" />
      <div className="container overflow-hidden">
        <div className="title-1">
          <span className="title-label">new</span>
          <h2>awesome service</h2>
        </div>
        <div className="row service-section color-svg">
          {serviceData.map((service, index) => (
            <div key={index} className="col-lg-4">
              <div className="service-box wow fadeInUp">
                <div>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="lower-section">
                    <Rating />
                    <h6>{service.discount}</h6>
                  </div>
                  <Link href="/pages/element-pages/service" className="btn btn-curve btn-lower color1">
                    learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
