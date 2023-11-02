"use client";
import Tabs from "@/utils/HOC/tabs/page";

import { FC, useCallback, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import OrderOnline from "../common/order-online/page";
import Overview from "../common/overview/page";

import Location from "@/components/hotels/single-pages/common/sections/location";
import BookPage from "../common/book/page";
import Review from "@/components/tour/single-page/common/sections/review";
import Gallery from "@/components/tour/single-page/common/sections/gallery";
import { galleryData } from "@/data/tour/single-page";
import { bannerImageData } from "@/data/restaurant/single-page";

const TabDescription: FC<ITabDescriptionProps> = ({ tabsData, class1 }) => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab],
  );

  return (
    <>
      <div className={class1} id="searchBar">
        <div className="container px-0">
          <Tabs callbackActive={callback} data={tabsData} />
        </div>
      </div>
      <div className="description-details">
        <TabContent activeTab={activeTab} className="tab-content" id="pills-tabContent">
          <TabPane tabId="1">
            <OrderOnline />
          </TabPane>
          <TabPane tabId="2">
            <Overview />
          </TabPane>
          <TabPane tabId="3">
            <Gallery galleryData={bannerImageData} />
          </TabPane>
          <TabPane tabId="4">
            <Location />
          </TabPane>
          <TabPane tabId="5">
            <BookPage />
          </TabPane>
          <TabPane tabId="6">
            <Review />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default TabDescription;
