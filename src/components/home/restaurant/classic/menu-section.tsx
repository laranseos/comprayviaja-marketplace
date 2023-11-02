import { FC } from "react";
import SliderSix from "@/components/common/slider-components/slide6";
import TitleComponent from "@/components/common/title/title";
import { Menu } from "@/constant/constant";
import { restaurantMenuData } from "@/data/home/restaurant/resatuarant-data";

const MenuSection: FC = () => {
  return (
    <section className="menu-section section-b-space default-layout-slider">
      <div className="container">
        <TitleComponent titleClass="title-3 rounded" title={Menu} subTitle="what hot today" span="what hot" />
        <div className="row">
          <div className="col">
            <SliderSix slideData={restaurantMenuData} rating={true}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
