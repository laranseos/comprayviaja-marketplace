"use client";
import { FC } from "react";

import CustomLayout from "@/layouts/layout";
import SearchSection from "@/components/flight/sidebar/left-sidebar/search-section/search-section.tsx";
import GridView from "@/components/common/grid-page/grid/grid-view";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { getFlights } from "@/redux-toolkit/flight-api";
import BreadcrumbOne from "@/components/common/breadcrumb/breadcrumbs1";
import BookingPanel from "@/components/flight/sidebar/round-trip/booking-panel";

const TopSidebar: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "66, 145, 184");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.flight);
  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <CustomLayout title="light_header custom-user-header" loader="flight" logo="dark">
      <BreadcrumbOne title={"about"} subTitle={"elements"} mainTitle="Flight top Filter" bannerImg={"/assets/images/flights/flight-breadcrumb2.jpg"} />
      <SearchSection />
      <GridView value={data} size={2} topFilter={true} type={"flight"} trip="round" schedule={false} />
      <BookingPanel />
    </CustomLayout>
  );
};

export default TopSidebar;
