import React, { FC } from "react";
import CustomizedItemsModal from "./modal/customized-item";
import QuantityPage from "./quantity";

const ListOfItemsPage: FC<IListItemsProps> = ({ items, navId, title }) => {
  return (
    <>
      <div id={navId} className="order-section">
        <div className="order-title">
          <h5>{title}</h5>
          <h6>4 items</h6>
        </div>
        <div className="order-items">
          {items.map((item: IClassicMenuProps, index: number) => (
            <div className={`items ${item.label !== "non-veg" ? "veg" : "non-veg"}`} key={index}>
              <h6>{item.name}</h6>
              <p>{item.description}</p>
              <h5>${item.price.toFixed(2)}</h5>
              {item.customized ? <CustomizedItemsModal /> : <QuantityPage />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListOfItemsPage;
