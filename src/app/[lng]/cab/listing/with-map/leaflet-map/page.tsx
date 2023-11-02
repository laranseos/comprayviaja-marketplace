"use client";
import { FC, FunctionComponent, useEffect, useState } from "react";
import MapView from "@/components/hotels/listing/map/map-view";
import CustomLayout from "@/layouts/layout";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { getCabs } from "@/redux-toolkit/cab-api";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import Search from "@/components/cab/listing/list-view/common/search";

const LeafletMap: FC = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();


  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import('@/components/hotels/listing/map/leaflet-map')).default;
        setClient(() => newClient);
      }
    })();
  }, []);

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
    <CustomLayout title="light_header" loader="map-left" logo="dark" userBgClass="user user-light">
      <BannerCab title="cab search" />
      <Search />
      <MapView value={data} side={"left"} gridType={"list-view"} gridOption={true} type="cab">
        {MyAwesomeMap?<MyAwesomeMap />:""}
      </MapView>
    </CustomLayout>
  );
};

export default LeafletMap;
