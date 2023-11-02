import { tabsData } from "@/data/hotels/booking";
import React, { FC, useState } from "react";

interface IStickyTabProps {
  fix: boolean;
}
const StickyTabs: FC<IStickyTabProps> = ({ fix }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
      <div className={`menu-top ${fix ? "sticky" : ""}`} id="navigation">
        <div className="container">
          <ul className="nav">
            {tabsData.map((tab,index) => (
              <li
                key={index}
                className={tab.id === activeTab ? "active" : ""}
                id="navigation"
              >
                <a
                  className=""
                  href={tab.href}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default React.memo(StickyTabs);
