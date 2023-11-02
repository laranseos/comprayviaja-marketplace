"use client";
import { FC, useEffect, useState } from "react";
import CustomLayout from "@/layouts/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import HomeBanner from "@/components/common/banner/restaurant-banner";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import MapView from "@/components/hotels/listing/map/map-view";

const LeafletMap: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);
  const [MyAwesomeMap, setClient] = useState<FC | null>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (
          await import("@/components/hotels/listing/map/leaflet-map")
        ).default;
        setClient(() => newClient);
      }
    })();
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <CustomLayout logo="dark" title="light_header" userBgClass="user user-light" loader="map-left">
      <HomeBanner />
      <MapView value={data} side={"left"} gridType={"grid-view"} type="restaurant">
        {MyAwesomeMap ? <MyAwesomeMap /> : ""}
      </MapView>
    </CustomLayout>
  );
};

export default LeafletMap;
