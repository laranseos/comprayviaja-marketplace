import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Breadcrumb from "@/components/common/breadcrumb/page";
import TitleThree from "@/components/common/title/title-three";

const TitleElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"title"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <section>
        <div className="container">
          <TitleThree classTitle="title-1" title="new" subTitle="emergency call" />
          <TitleThree classTitle="title-2" subTitle="Featured..." span="Destinations" desc="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard......." />
          <TitleThree classTitle="title-3" title="about" subTitle="our hotel" span="hotel" />
          <TitleThree classTitle="title-3 rounded" title="about" subTitle="our hotel" span="hotel" />
          <TitleThree classTitle="title-1 title-5" title="new" subTitle="emergency call" desc="Trips, experiences, and places. All in one service." />
        </div>
      </section>
    </CustomLayout>
  );
};

export default TitleElement;
