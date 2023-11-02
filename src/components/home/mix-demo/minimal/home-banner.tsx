"use client";
import { FC, useCallback, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import TourSearch from "@/components/common/search/tour-search";
import FlightSearch from "@/components/home/cab/map/flight-search";
import SearchTabs from "../search-tabs";
import Img from "@/utils/BackgroundImageRatio";
import SearchBox from "@/components/common/search-box/page";
import CabSearchTabs from "./cab-search";
import FoodSearchTab from "./FoodSearchTab";

const HomeBanner: FC = () => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback((tab: string) => {setActiveTab(tab)},[activeTab])
  return (
    <>
      <div className="container-fluid border-top header-tabs mix-2">
        <div className="row">
          <div className="col-12">
            <SearchTabs callbackActive={callback} svg={true} />
          </div>
        </div>
      </div>
      <section className="home_section p-0">
        <div className="home home-padding">
          <Img src="/assets/images/flights/banner.jpg" className="bg-img img-fluid" alt=""/>
          <div className="animation-bg">
            <div className="container custom-container mix-layout-section">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <div className=" home-content mix-layout smaller-content">
                    <div className="bg-transparent">
                      <TabContent activeTab={activeTab} id="pills-tabContent">
                        <TabPane tabId="1">
                          <div className="search-panel">
                            <h2 className="title-top">book rooms, homes & apts</h2>
                            <div className="search-section">
                              <div className="search-box rounded10">
                                <div className="left-part">
                                  <SearchBox />
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="2">
                          <div className="search-panel">
                            <h2 className="title-top">
                              search for your perfect holiday
                            </h2>
                            <div className="search-section">
                              <div className="search-box rounded10">
                                <div className="left-part">
                                  <TourSearch />
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="3">
                          <FlightSearch title />
                        </TabPane>
                        <TabPane tabId="4">
                          <CabSearchTabs />
                        </TabPane>
                        <TabPane tabId="5">
                          <FoodSearchTab />
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
