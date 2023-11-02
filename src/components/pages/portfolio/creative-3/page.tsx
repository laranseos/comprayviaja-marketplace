"use client"
import Pagination from "@/components/common/grid-page/pagination/page-layout";
import Img from "@/utils/BackgroundImageRatio";
import { FrameGrid } from "@egjs/react-grid";
import { FC, Key } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const CreativePage: FC<ICreativeProps> = ({ value, grid }) => {
  const cardToShow = 13;
  const totalPages = Math.ceil(value?.length / cardToShow);
  return (
    <>
      <FrameGrid
        className="container"
        gap={2}
        defaultDirection={"end"}
        frame={
          grid.gridSize === 5
            ? [
              [1, 2, 3, 4, 5, 5],
              [6, 6, 7, 8, 5, 5],
              [6, 6, 9, 10, 11, 12],
            ]
            : [
              [1, 2, 3, 4, 4, 4],
              [5, 5, 6, 4, 4, 4],
              [5, 5, 7, 4, 4, 4],
              [8, 8, 9, 9, 10, 11],
              [8, 8, 9, 9, 12, 13],
            ]
        }
        rectSize={0}
        useFrameFill={true}>
        <Gallery>
          {value?.map((imgPath: { img: string | undefined; }, i: Key | null | undefined) => (
            <div className="popular grid-item wow zoomIn p-0 col-lg-2 col-md-4 col-6" key={i}>
              <div className="overlay">
                <div className="portfolio-image">
                  <Item original={imgPath.img} width="1000" height="600">
                    {({ ref, open }:any) => (
                      <a ref={ref} onClick={open}>
                        <Img src={imgPath.img} className="bg-img" />
                      </a>
                    )}
                  </Item>
                </div>
              </div>
            </div>
          ))}
        </Gallery>
      </FrameGrid>
      <Pagination totalPages1={totalPages} />
    </>
  );
};

export default CreativePage;
