"use client";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";

import { getTourData } from "@/redux-toolkit/tour-api";
import GridView from "@/components/pages/common/grid-view";

const Grid4: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tour);

  useEffect(() => {
    dispatch(getTourData());
  }, [dispatch]);

  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"}>
      <Breadcrumb title="Home" subTitle="portfolio" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <GridView value={data} size={4} gridType={"grid-view"} type="tour" />
    </CustomLayout>
  );
};

export default Grid4;
