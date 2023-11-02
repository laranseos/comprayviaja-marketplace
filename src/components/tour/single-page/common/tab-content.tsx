import { FC, useState, useCallback } from "react";
import { TabContent, TabPane } from "reactstrap";
import Highlight from "./sections/highlight";
import Itinerary from "./sections/itinerary";
import Gallery from "./sections/gallery";
import Accommodations from "./sections/accommodations";
import Location from "@/components/hotels/single-pages/common/sections/location";
import Review from "./sections/review";
import Policy from "./sections/policies";
import Tabs from "@/utils/HOC/tabs/page";
import { tourTabsData } from "@/data/tour/tour-filter";
import { galleryData } from "@/data/tour/single-page";

const TabContentComponent: FC<ITabContentComponentProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab],
  );

  return (
    <div className={"menu-top menu-up"} id="searchBar">
      <Tabs callbackActive={callback} data={tourTabsData} />
      <TabContent activeTab={activeTab} className="description-details tab-content" id="top-tabContent">
        <TabPane tabId="1">
          <Highlight />
        </TabPane>
        <TabPane tabId="2" className="default-accordion">
          <Itinerary />
        </TabPane>
        <TabPane tabId="3">
          <Gallery galleryData={galleryData} />
        </TabPane>
        <TabPane tabId="4">
          <Accommodations data={data} />
        </TabPane>
        <TabPane tabId="5">
          <Location />
        </TabPane>
        <TabPane tabId="6">
          <Review />
        </TabPane>
        <TabPane tabId="7">
          <Policy />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabContentComponent;
