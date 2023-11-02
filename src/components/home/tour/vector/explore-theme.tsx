import { FC } from "react";
import { slide6 } from "@/components/common/slider-options";
import TitleComponent from "@/components/common/title/title";
import SliderOne from "@/components/common/slider-components/slider1";
import { tourExploreThemeData } from "@/data/home/tour/tour-data";

const ExploreTheme: FC = () => {
  return (
    <section className="section-b-space layout-3">
      <div className="tourSection ratio_asos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TitleComponent titleClass="title-3" title="rica" subTitle="Explore through Themes" span="best" />
              <SliderOne slideClass="slide-6 no-arrow" tourData={tourExploreThemeData} classTitle="tourBox wow zoomIn" slideCom={slide6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTheme;
