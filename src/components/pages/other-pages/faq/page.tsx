"use client";
import React, { FC, useState } from "react";
import BodyContent from "./tab-content/content";
import { tabs } from "@/data/pages/all-page";
import NewsLatterContent from "@/components/common/news-latter/page";

const FaqContent: FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <section className="small-section bg-inner other-faq" data-sticky_parent>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="pro_sticky_info" data-sticky_column>
              <div className="faq-tab">
                <ul className="nav nav-tabs" id="top-tab" role="tablist">
                  {tabs.map((tab,index) => (
                    <li className="nav-item" key={index}>
                      <a href="#javascript" className={`nav-link ${activeTab === tab.id ? "active" : ""}`} onClick={() => handleTabClick(tab.id)}>
                        {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="single-section mt-3 d-none d-lg-block">
                <NewsLatterContent titleClass="single-sidebar p-0" />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="product_img_scroll" data-sticky_column>
              <div className="faq-content tab-content" id="top-tabContent">
                {tabs.map((tab,index) => (
                  <div className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`} id={tab.id} key={index}>
                    <BodyContent tabId={tab.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
