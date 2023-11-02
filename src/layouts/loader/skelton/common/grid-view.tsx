import { RootState } from "@/redux-toolkit/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import SkeletonList from "./list-view";

const SkeletonGridView: FC = () => {
  const { gridSize, gridStyle } = useSelector((state: RootState) => state.gridReducer);
  const numProducts = 6; // The number of products to display

  const renderProducts = () => {
    const products = [];
    for (let i = 0; i < numProducts; i++) {
      products.push(
        <div key={i} className={`${gridSize === 3 && "col-xl-4"} ${gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6  grid-item `}>
          <div className="special-box">
            <div className="special-img"></div>
            <div className="special-content">
              <h5></h5>
              <p>
                <span></span>
                <span></span>
              </p>
              <div className="bottom-section">
                <div className="rating"></div>
                <div className="price">
                  <span></span>
                  <div className="facility-detail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return products;
  };

  return <div className="product-wrapper-grid special-section grid-box">
    {gridStyle === "list-view" ? <SkeletonList /> : <div className={"row  content grid"}>{renderProducts()}</div>}</div>;
};

export default SkeletonGridView;
