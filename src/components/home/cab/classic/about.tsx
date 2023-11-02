import { FC } from "react";
import AboutCommon from "@/components/common/choose-rica/about";
import TitleThree from "@/components/common/title/title-three";
import { aboutClassicData } from "@/data/home/cab/cab-data";

const AboutClassic: FC = () => {
  return (
    <section className="about-section section-b-space">
      <div className="container">
        <TitleThree title="why choose Comprayviaja?" subTitle="welcome to Comprayviaja" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!" classTitle="title-1 detail-title" />
        <div className="highlight-section">
          <div className="row">
            <AboutCommon aboutData={aboutClassicData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClassic;
