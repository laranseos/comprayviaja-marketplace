"use client";
import { FC, useEffect, useState } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import SearchBox from "@/components/common/search-box/page";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import GridView from "@/components/common/grid-page/grid/grid-view";
import MapModal from "@/components/common/model/map/page";
import PigeonMapComponent from "@/components/common/map/pigeon-map";

const PigeonMapModal: FC = () => {
  const [mapModal, setMapModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.hotel);
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="pre">
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
      <GridView size={3} gridType={"grid-view"} side={"left"} value={data} topFilter={false} mapModal={true} grid4Img={false} gridOption={true} setMapModal={setMapModal} type={"hotel"} />
      <MapModal modal={mapModal} setMapModal={setMapModal} value={data}>
        <PigeonMapComponent />
      </MapModal>
    </CustomLayout>
  );
};

export default PigeonMapModal;
