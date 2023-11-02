"use Client";
import { FC } from "react";
import { useEffect, useState } from "react";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/HOC/NoSsr";
import { MasonryGrid } from "@egjs/react-grid";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IGridLayoutProps } from "@/components/common/grid-page/grid-page.d";

const GridLayoutPage: FC<IGridLayoutProps> = ({ value, grid, view }) => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    setTimeout(() => setDisplay(true), 500);
  }, [value]);
  if (!display) {
    return <div style={{ height: "60vh" }}></div>;
  }
  return (
    <NoSsr>
      {/* <MasonryGrid className="masonry-spacing"> */}
        <Gallery>
          {value?.map((data: GalleryData) => (
            <div className={`${grid.gridSize === 3 && "col-xl-4"} ${grid.gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6 popular grid-item wow fadeInUp`} key={data.id}>
              <div className="overlay">
                <Item original={data.img} width="1200" height="800">
                  {({ ref, open }) => (
                    <div className="portfolio-image" ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open}>
                      <Img src={data.img} alt="" className="img-fluid" />
                    </div>
                  )}
                </Item>
                {view === "portfolio-text" && (
                  <div className="portfolio-text">
                    <h3>luxury gateway</h3>
                    <h6>unmissable experience in vienna </h6>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Gallery>
      {/* </MasonryGrid> */}
    </NoSsr>
  );
};

export default GridLayoutPage;
