"use client";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC, useEffect } from "react";
import SearchBox from "@/components/common/search-box/page";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "@/redux-toolkit/hotel-api";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import GridView from "@/components/common/grid-page/grid/grid-view";

const Slider: FC = () => {
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
      <GridView size={2} gridType={"list-view"} side={"left"} value={data} topFilter={false} grid4Img={false} type="hotel" filter={true} view="slider" />
    </CustomLayout>
  );
};

export default Slider;
