"use client";
import { FC, useEffect } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import SearchBox from "@/components/common/search-box/page";
import GoogleMapComponent from "@/components/common/map/google-map";
import MapView from "@/components/hotels/listing/map/map-view";
import CustomLayout from "@/layouts/layout";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { useDispatch, useSelector } from "react-redux";

const GoogleMap: FC = () => {
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
        <GoogleMapComponent />
      </MapView>
    </CustomLayout>
  );
};

export default GoogleMap;
