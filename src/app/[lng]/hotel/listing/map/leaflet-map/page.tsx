"use client";
import { FC, useEffect, useState } from "react";
import Breadcrumb from "@/components/common/breadcrumb/page";
import SearchBox from "@/components/common/search-box/page";
import MapView from "@/components/hotels/listing/map/map-view";
import CustomLayout from "@/layouts/layout";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { useDispatch, useSelector } from "react-redux";

const LeafletMap: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hotel);
  const [MyAwesomeMap, setClient] = useState<FC | null>(null);


useEffect(() => {
  (async () => {
    if (typeof window !== "undefined") {
      const newClient = (await import('@/components/hotels/listing/map/leaflet-map')).default;
      setClient(() => newClient);
    }
  })();
  dispatch(getHotels());
}, [dispatch]);

  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="map-loader">
      <Breadcrumb title="Home" subTitle="hotels in dubai" bannerImg={"/assets/images/inner-pages/bg-bread.jpg"} />
      <div className="search-panel" id="searchBar">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="search-panel" id="searchBar">
              <div className="search-section">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <MapView value={data} side={"right"} gridType={"grid-view"} type="hotel">
        {MyAwesomeMap?<MyAwesomeMap />:""}
      </MapView>
    </CustomLayout>
  );
};

export default LeafletMap;
