"use client";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BodyContent from "@/components/common/blog/element-1";
import Pagination from "@/components/common/grid-page/pagination/page-layout";
import MasonryBlog from "@/components/common/blog/element-2";
import { RootState } from "@/redux-toolkit/store";

const ContentPage: FC<IBlogsSidebarProps> = ({ slideData, size, view }) => {
  const cardToShow = 6;
  const grid = useSelector((state: RootState) => state.gridReducer);
  const totalPages = Math.ceil(slideData?.length / cardToShow);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "gridSize", payload: size });
    dispatch({ type: "productCount", payload: slideData?.length });
  }, [dispatch, slideData]);
  return (
    <>
      {view !== "masonry" ? (
        <div className={`row ${view === "creative" || view === "list" ? "blog-list" : ""}`}>
          {slideData.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((items: IBlogProps,index) => (
            <div className={`${view === "creative" || view === "list" ? "col-12" : "col-md-6"} ${grid.gridSize === 3 && "col-xl-4"}`} key={index}>
              <BodyContent data={items} view={view} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {slideData?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((item: IBlogProps,index) => (
            <MasonryBlog data={item} key={index} />
          ))}
        </>
      )}

      <Pagination totalPages1={totalPages} />
    </>
  );
};

export default ContentPage;
