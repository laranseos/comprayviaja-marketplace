"use client";
import { FC, useEffect } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import HomeBanner from "@/components/common/banner/restaurant-banner";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import GridView from "@/components/common/grid-page/grid/grid-view";

const ImageSlider: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <CustomLayout logo="dark" title="light_header" userBgClass="user user-light" loader="food">
      <HomeBanner />
      <GridView size={3} value={data} type={"restaurant"} gridType="grid-view" gridOption={true} view="slider" gridSelect={true} />
    </CustomLayout>
  );
};

export default ImageSlider;
