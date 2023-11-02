import { FC } from "react";
import TotalItemSlider from "@/components/common/slider-components/total-item-slider";
import { topMenuData } from "@/data/home/restaurant/resatuarant-data";

const TopMenu: FC = () => {
  return (
    <div className="container">
      <section className="category-part radius-category small-section pb-0 ratio_square">
        <div className="row">
          <div className="col">
            <TotalItemSlider slideData={topMenuData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopMenu;
