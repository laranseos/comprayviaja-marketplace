"use client";
import { FC, useEffect } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import HomeBanner from "@/components/common/banner/restaurant-banner";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import GridView from "@/components/common/grid-page/grid/grid-view";

const FourGrid: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <CustomLayout logo="dark" title="light_header" userBgClass="user user-light" loader="no-sidebar">
      <HomeBanner />
      <GridView latestFilter size={4} value={data} type={"restaurant"} gridType="grid-view" gridOption={true} topFilter={true} side="no" grid4Img={true} />
    </CustomLayout>
  );
};

export default FourGrid;
