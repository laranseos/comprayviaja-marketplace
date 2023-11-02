"use client";
import { AwesomeService, Rica, Service } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import { services } from "@/data/home/hotel/hotel-data";
import ServiceOne from "@/components/common/service/service1";
import Animation from "@/components/common/animation/animation";

const ServicesComponent: React.FC = () => {
  return (
    <section className="section-b-space animated-section">
      <Animation />
      <div className="container">
        <TitleComponent title={Rica} subTitle={AwesomeService} span={Service} titleClass={"title-3"} />
        <ServiceOne serviceData={services} />
      </div>
    </section>
  );
};

export default ServicesComponent;
