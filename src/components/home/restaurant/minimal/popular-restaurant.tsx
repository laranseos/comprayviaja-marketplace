"use client";
import { FC, useCallback, useEffect, useState } from "react";
import RestaurantProducts from "@/components/common/elements/product-box-6/restaurant-product";
import CategoryPage from "@/components/common/filters/category";
import { PopularRestaurantConst } from "@/constant/constant";
import { PopularRestaurantData } from "@/data/home/restaurant/resatuarant-data";
import { getRestaurant } from "@/redux-toolkit/restaurant-api";
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";

const PopularRestaurant: FC = () => {
  const [filteredMenu, setFilteredMenu] = useState<IPopularItemProps[]>(PopularRestaurantData);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);
  const getCategories = useCallback((data: []) => {
    setFilteredMenu(data);
  }, []);
  return (
    <section className="section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter-panel filter-title-bar">
              <h4 className="">{PopularRestaurantConst}</h4>
              <div className="left-filter ms-auto">
                <div className="filters respon-filter-content d-block filter-button-group">
                  <CategoryPage value={data} getCategories={getCategories} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 ratio3_2">
            <div className="product-wrapper-grid special-section grid-box">
              <div className="row content grid mb-down">
                {filteredMenu.map((data: IPopularItemProps,index) => (
                  <div className={`col-xl-3 col-lg-4 col-sm-6  grid-item ${data.type}`} key={index}>
                    <RestaurantProducts data={data}  />
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

export default PopularRestaurant;
