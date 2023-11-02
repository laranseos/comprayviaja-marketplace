"use client";
import { FC, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import CartItem from "../common/cart-item/page";
import { cartItemsData, tabsTitleData } from "@/data/restaurant/single-page";
import TabDescription from "./tab-description";
import SpecialImage from "../common/special-image/page";
import CartEmpty from "../common/cart-empty/page";
import NewsLatterContent from "@/components/common/news-latter/page";

const MainSinglePage: FC<ISinglePageProps> = ({ side, cartItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  return (
    <>
      <section className="single-section small-section bg-inner">
        <div className="container">
          <div className="row">
            <div className={`col-xl-3 col-lg-4 ${side === "right" ? "order-1" : ""}`}>
              <div className="sticky-cls-top">
                {cartItem !== "empty" ? (
                  <CartItem items={cartItemsData} showMenu={showMenu} setShowMenu={setShowMenu} />
                ) : (
                  <CartEmpty showMenu={showMenu} setShowMenu={setShowMenu} />
                )}
                <NewsLatterContent titleClass={""} />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="description-section tab-section">
                <TabDescription tabsData={tabsTitleData} class1="menu-top" />
              </div>
              <SpecialImage data={data} />
            </div>
          </div>
        </div>
      </section>
      <div className="cart" onClick={()=>setShowMenu(!showMenu)}>
        <a href="#javascript:void(0)">
          <i className="fas fa-shopping-cart" />
        </a>
      </div>
    </>
  );
};

export default MainSinglePage;
