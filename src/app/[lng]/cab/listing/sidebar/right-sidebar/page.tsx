"use client";


import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { FC, useEffect } from "react";
import { getCabs } from "@/redux-toolkit/cab-api";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import Search from "@/components/cab/listing/list-view/common/search";
import GridView from "@/components/common/grid-page/grid/grid-view";

const CabRightSidebar: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.cab);
  useEffect(() => {
    dispatch(getCabs());
  }, [dispatch]);

  return (
    <CustomLayout title="light_header" loader="right" logo="dark" userBgClass="user user-light">
      <BannerCab title="cab search" />
      <Search />
      <GridView type={"cab"} size={3} topFilter={false} value={data} gridType="grid-view" grid4Img={true} gridOption={false} side="right" />
    </CustomLayout>
  );
};

export default CabRightSidebar;
