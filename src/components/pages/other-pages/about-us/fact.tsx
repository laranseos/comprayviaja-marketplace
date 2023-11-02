import Animation from "@/components/common/animation/animation";
import TitleThree from "@/components/common/title/title-three";
import { factsData } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const FactsContent: FC = () => {
  return (
    <section className="facts-section animated-section section-b-space">
      <Img src="/assets/images/cab/grey-bg.jpg" alt="" className="img-fluid bg-img" />
      <Animation />
      <div className="container">
        <TitleThree classTitle={"title-1"} title="rica" subTitle={"no stories, facts only"} />
        <div className="row">
          {factsData.map((fact: IFactProps, index: number) => (
            <div key={index} className="col-lg-3 col-6">
              <div className="facts-box">
                <div>
                  <div className="img">
                    <Img src={fact.icon} className="img-fluid" alt="" />
                  </div>
                  <h3 className="counter">{fact.counter}</h3>
                  <h6>{fact.label}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsContent;
