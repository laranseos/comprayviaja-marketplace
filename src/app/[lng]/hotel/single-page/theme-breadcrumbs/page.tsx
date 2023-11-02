import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import CustomLayout from "@/layouts/layout";
import BreadcrumbBanner from "@/components/hotels/single-pages/theme-breadcrumbs/breadcrumbs-banner";

const ThemeBreadcrumbs: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="inner-page overlay-black" userBgClass="user user-light rounded5" loader="pre">
      <BreadcrumbBanner />
      <SinglePageSection side="right" tab={true} />
    </CustomLayout>
  );
};

export default ThemeBreadcrumbs;
