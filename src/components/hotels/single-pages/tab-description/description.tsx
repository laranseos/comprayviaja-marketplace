"use client";
import Tabs from "@/utils/HOC/tabs/page";

import { FC, useCallback, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import About from "../common/sections/about";
import Rooms from "../common/sections/rooms";
import Facilities from "../common/sections/facility";
import Location from "../common/sections/location";
import Reviews from "../common/sections/reviews";
import Policies from "../common/sections/policies";

interface ITabDescriptionProps {
  tabsData: ITabsDataProps[];
  class1: string;
}
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
        <div className="container">
          <Tabs callbackActive={callback} data={tabsData} />
        </div>
      </div>
      <div className="description-details">
        <TabContent activeTab={activeTab} className="tab-content" id="pills-tabContent">
          <TabPane tabId="1">
            <About />
          </TabPane>
          <TabPane tabId="2">
            <Rooms tab={false} />
          </TabPane>
          <TabPane tabId="3">
            <Facilities tab={false} />
          </TabPane>
          <TabPane tabId="4">
            <Location tab={false} />
          </TabPane>
          <TabPane tabId="5">
            <Reviews tab={false} />
          </TabPane>
          <TabPane tabId="6">
            <Policies tab={false} />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default TabDescription;
