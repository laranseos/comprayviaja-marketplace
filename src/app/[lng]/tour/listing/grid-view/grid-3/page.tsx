"use client";
import { FC, useEffect } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import GridView from "@/src/components/common/grid-page/grid/grid-view";
import CustomLayout from "@/layouts/layout";
import { AppDispatch, RootState } from "@/src/redux-toolkit/store";
import { getTourData } from "@/src/redux-toolkit/tour-api";
import { useDispatch, useSelector } from "react-redux";

const TwoGrid: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <CustomLayout
      title="inner-page overlay-black"
      userBgClass="user user-light"
      loader="no-sidebar"
    >
      <Breadcrumb
        title="Home"
        subTitle="holiday package"
        bannerImg={"/assets/images/inner-pages/breadcrumb1.jpg"}
        animation={true}
        class1="parallax-img pt-0"
        class2=" overlay-black"
      />
      <div className="right-filter-wrapper">
        <GridView
          size={3}
          gridType={"grid-view"}
          side={"no"}
          value={data}
          topFilter={true}
          gridOption={true}
          grid4Img={true}
          type={"tour"}
          latestFilter
        />
      </div>
    </CustomLayout>
  );
};

export default TwoGrid;
