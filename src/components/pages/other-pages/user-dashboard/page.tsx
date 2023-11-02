"use client";
import { FC, useState } from "react";
import DashboardSidebar from "./sidebar/dashboard-sidebar";
import Profile from "./profile/page";
import Dashboard from "./dashboard/dashboard";
import Bookings from "./bookings/bookings";
import AddedCard from "./payment/page";
import Bookmark from "./bookmark/page";
import Security from "./security/page";
import { userTabs } from "@/data/pages/all-page";

const BodyContent: FC = () => {
  const [activeTab, setActiveTab] = useState(userTabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <section className="small-section dashboard-section bg-inner" data-sticky_parent>
      <div className="container">
        <div className="row">
          <DashboardSidebar handleTabClick={handleTabClick} activeTab={activeTab} />
          <div className="col-lg-9">
            <div className="product_img_scroll" data-sticky_column>
              <div className="faq-content tab-content" id="top-tabContent">
                <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`} id={"dashboard"}>
                  <Dashboard />
                </div>
                <div className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`} id={"profile"}>
                  <Profile />
                </div>
                <div className={`tab-pane fade ${activeTab === "bookings" ? "show active" : ""}`} id={"bookings"}>
                  <Bookings />
                </div>
                <div className={`tab-pane fade ${activeTab === "cards" ? "show active" : ""}`} id={"cards"}>
                  <AddedCard />
                </div>
                <div className={`tab-pane fade ${activeTab === "bookmark" ? "show active" : ""}`} id={"bookmark"}>
                  <Bookmark />
                </div>
                <div className={`tab-pane fade ${activeTab === "security" ? "show active" : ""}`} id={"security"}>
                  <Security />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
