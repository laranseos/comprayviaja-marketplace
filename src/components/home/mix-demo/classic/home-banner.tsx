"use client";
import { FC, useCallback, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import SearchTabs from "../search-tabs";
import SearchComponent from "@/components/home/hotels/classic/search";
import TourSearch from "@/components/common/search/tour-search";
import CabSearch from "@/components/common/search/cab-search";
import FoodSearch from "@/components/common/search/food-search";
import FlightSearch from "@/components/home/cab/map/flight-search";

const HomeBanner: FC = () => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab],
  );
  return (
    <section className="home_section slide-1 p-0">
      <div>
        <div className="home home-mobile" id="block" style={{ width: "100%" }} data-vide-bg="/assets/video/city.mp4" data-vide-options="position: 0% 50%, loop: true">
          <video width="100%" height="100%" controls={false} autoPlay className="video-mixed">
            <source src="/assets/video/city.mp4" type="video/mp4" />
          </video>
          <div className="container custom-container mix-layout-section">
            <div className="row">
              <div className="col-xl-10 m-auto">
                <div className="home-content mix-layout smaller-content">
                  <div className="bg-transparent">
                    <h1>Where Do You Want Go ?</h1>
                    <h3>Experience world class services trip in Japan featured</h3>
                    <SearchTabs callbackActive={callback} />
                    <TabContent activeTab={activeTab} className="tab-content" id="pills-tabContent">
                      <TabPane tabId="1">
                        <div className="mix-demo-classic">
                          <SearchComponent />
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <TourSearch />
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="mix-demo-flight">
                          <FlightSearch />
                        </div>  
                      </TabPane>
                      <TabPane tabId="4">
                        <CabSearch />
                      </TabPane>
                      <TabPane tabId="5">
                        <FoodSearch />
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
  );
};

export default HomeBanner;
