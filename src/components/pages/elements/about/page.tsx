import { FC } from "react";
import { Best } from "@/constant/constant";
import Image from "next/image";
import CabAnimation from "@/components/common/animation/cab-animation";
import TitleComponent from "@/components/common/title/title";
import { aboutImgBoxData } from "@/data/home/cab/cab-data";
import AboutDetails from "@/components/home/cab/modern/about-details";

const AboutPage: FC = () => {
  return (
    <section className="section-b-space animated-section about-section pb-0">
      <CabAnimation />
      <div className="container">
        <TitleComponent titleClass="title-3" title={Best} subTitle={"emergency taxi call"} span="emergency" />
        <div className="row">
          <div className="col-lg-7">
            <div className="image-section">
              {aboutImgBoxData.map((data: { id: number; img: string; title: string },index) => (
                <div className="img-box" key={index}>
                  <Image src={data.img} data-tilt data-tilt-perspective="110" data-tilt-speed="400" data-tilt-max="1.2" className="img-fluid " alt="" width={375} height={365} />
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

export default AboutPage;
