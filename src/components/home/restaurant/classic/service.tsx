import { FC } from "react";
import Animation from "@/components/common/animation/animation";
import ServiceOne from "@/components/common/service/service1";
import { services } from "@/data/home/hotel/hotel-data";

const Service: FC = () => {
  return (
    <section className="section-b-space animated-section">
      <Animation />
      <div className="container">
        <div className="title-3 rounded">
          <span className="title-label">rica</span>
          <h2>
            awesome service<span>Service</span>
          </h2>
        </div>
        <ServiceOne serviceData={services} />
      </div>
    </section>
  );
};
export default Service;
