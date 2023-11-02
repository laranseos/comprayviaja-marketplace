"use client";
import { FC, useEffect } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import GridView from "@/components/common/grid-page/grid/grid-view";
import { getTourData } from "@/redux-toolkit/tour-api";

const Video: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <CustomLayout title="inner-page overlay-black" userBgClass="user user-light" loader="pre">
      <Breadcrumb title="Home" subTitle="holiday package" bannerImg={"/assets/images/inner-pages/breadcrumb1.jpg"} animation={true} class1="parallax-img pt-0" class2=" overlay-black" />
      <div className="right-filter-items">
        <GridView size={3} gridType={"list-view"} side={"left"} value={data} topFilter={false} gridOption={true} grid4Img={false} type="tour" filter={false} view="video" gridSelect={true} />
      </div>
    </CustomLayout>
  );
};

export default Video;
