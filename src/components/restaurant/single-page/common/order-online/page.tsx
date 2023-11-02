"use client";
import { useState, useEffect } from "react";
import NavSection from "./nav-section";
import ListOfItemsPage from "./list-items";
import Bites from "./bites";
import Deserts from "./desert";
import { BestSellerItems, comboItem, orderLinks, pizzaItem, sandwichItem } from "@/data/restaurant/single-page";

const OrderOnline = () => {
  const [scroll, setScroll] = useState(false);
  const [noScroll, setNoScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 757) {
        setNoScroll(true);
      } else if (window.scrollY > 757 && window.scrollY <= 3600) {
        setScroll(true);
        setNoScroll(false);
      } else {
        setScroll(false);
        setNoScroll(false);
      }
    });
  }, []);
  return (
    <div className="menu-part p-0 tab-pane" id="order">
      <div className="">
        <div className="container p-0" data-sticky_parent>
          <div className="row m-0">
            <div className="col-xl-3 col-lg-4 d-lg-block d-none p-0">
              <div className={`w-auto product_img_scroll ${noScroll ? "" : scroll ? "is_stuck" : "is_not_stuck"}`}>
                <NavSection links={orderLinks} />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 p-0">
              <div className="pro_sticky_info" data-sticky_column>
                <div data-spy="scroll" data-bs-target="#order-menu">
                  <div className="order-menu-section">
                    <ListOfItemsPage items={BestSellerItems} navId="bestseller" title="bestseller" />
                    <Bites />
                    <ListOfItemsPage items={sandwichItem} navId="sandwich" title="sandwich" />
                    <ListOfItemsPage items={pizzaItem} navId="pizza" title="pizza" />
                    <ListOfItemsPage items={comboItem} navId="combo" title="combo" />
                    <Deserts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
