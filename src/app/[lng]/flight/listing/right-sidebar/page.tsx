"use client";
import { FC } from "react";
import BannerBreadcrumbs from "@/components/flight/sidebar/left-sidebar/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import SearchSection from "@/components/flight/sidebar/left-sidebar/search-section/search-section.tsx";
import GridView from "@/components/common/grid-page/grid/grid-view";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { getFlights } from "@/redux-toolkit/flight-api";

const RightSidebar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.flight);
  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <CustomLayout title="light_header custom-user-header" loader="flight" logo="dark">
      <BannerBreadcrumbs />
      <SearchSection />
      <GridView side={"right"} value={data} type={"flight"} schedule={true} latestFilter />
    </CustomLayout>
  );
};

export default RightSidebar;
