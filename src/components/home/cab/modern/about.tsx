import { FC } from "react";
import { Best, EmergencyCall } from "@/constant/constant";
import AboutDetails from "./about-details";
import Image from "next/image";
import CabAnimation from "@/components/common/animation/cab-animation";
import TitleComponent from "@/components/common/title/title";
import { aboutImgBoxData } from "@/data/home/cab/cab-data";

const CabAbout: FC = () => {
  return (
    <section className="section-b-space animated-section about-section">
      <CabAnimation />
      <div className="container">
        <TitleComponent titleClass="title-1" title={Best} subTitle={EmergencyCall} />
        <div className="row">
          <div className="col-lg-7">
            <div className="image-section">
              {aboutImgBoxData.map((data: { id: number; img: string; title: string },index) => (
                <div className="img-box" key={index}>
                  <Image src={data.img}  className="img-fluid " alt="" width={375} height={365} />
                  <div className="no-class">
                    <h3>{data.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <AboutDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabAbout;
