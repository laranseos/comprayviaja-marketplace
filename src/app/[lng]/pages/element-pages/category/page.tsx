import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import Category1 from "@/components/home/restaurant/classic/category";
import Category2 from "@/components/home/tour/modern/new-offer";
import Category3 from "@/components/home/tour/modern/package";
import Category4 from "@/components/home/cab/modern/our-vehicle";
import Category5 from "@/components/home/mix-demo/classic/top-category";
import Category6 from "@/components/home/flight/modern/flight-route";
import Category7 from "@/components/home/flight/modern/airline-tickets";

const CategoryElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"category"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <div className="default-pb-0">
        <Category1 />
      </div>
      <div className="default-pb-0">
        <Category2 />
      </div>
      <Category3 />
      <Category4 />
      <section className="top-category">
        <Category5 type="mix" titleClass="category-4 no-arrow section-t-space" />
      </section>
      <div className="default-pb-0">
        <Category6 />
      </div>
      <Category7 />
    </CustomLayout>
  );
};

export default CategoryElement;
