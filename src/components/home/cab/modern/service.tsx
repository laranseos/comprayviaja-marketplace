import { FC } from "react";
import { serviceCabData } from "@/data/home/cab/cab-data";
import { AwesomeService, LearnMore, New } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import CabAnimation from "@/components/common/animation/cab-animation";
import TitleComponent from "@/components/common/title/title";
import Rating from "@/components/common/rating";
import Button from "@/components/common/btn";
import Link from 'next/link';

const Service: FC = () => {
  return (
    <BackgroundSection titleClass={"section-b-space dark-cls animated-section"} img={"/assets/images/cab/grey-bg.jpg"} imgWidth={0} imgHeight={0} position={"center"}>
      <CabAnimation />
      <div className="container">
        <TitleComponent title={New} subTitle={AwesomeService} titleClass="title-1" />
        <div className="row service-section">
          {serviceCabData.map((data: IServiceCabProps,index) => (
            <div className="col-lg-4" key={index}>
              <div className="service-box">
                <div>
                  <div className="service-icon">{data.svg}</div>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <div className="lower-section">
                    <Rating />
                    <h6>{data.price}</h6>
                  </div>
                  <Link href="/pages/element-pages/service"><Button btnClass="btn btn-curve btn-lower color1" name={LearnMore} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundSection>
  );
};

export default Service;
