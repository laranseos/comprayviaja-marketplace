"use client";
import { useDispatch, useSelector } from "react-redux";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import SearchBox from "@/components/common/search-box/page";
import MapView from "@/components/hotels/listing/map/map-view";
import PigeonMapComponent from "@/components/common/map/pigeon-map";
import CustomLayout from "@/layouts/layout";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { FC, useEffect } from "react";

const PigeonMap: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hotel);

  useEffect(() => {
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
      <MapView value={data} side={"right"} gridType={"list-view"} type={"hotel"}>
        <PigeonMapComponent />
      </MapView>
    </CustomLayout>
  );
};

export default PigeonMap;
