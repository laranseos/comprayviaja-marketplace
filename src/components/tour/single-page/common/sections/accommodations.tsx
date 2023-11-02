import ListPage from "@/components/common/elements/product-box/list-product-box";
import { FC } from "react";


const Accommodations: FC<IAccommodationsProps> = ({ data, fullSlide }) => {
  return (
    <div className="menu-part tab-pane accommodations-items" id="accommodations">
      {fullSlide && <h2 className="mb-3">accommodations</h2>}
      <div className="list-view">
        {data.map((items: any,index) => (
          <ListPage data={items} type={"tour"} key={index} />
        ))}
      </div>
    </div>

  );
};

export default Accommodations;
