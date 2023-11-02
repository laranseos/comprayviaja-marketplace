import { FC } from "react";
import ListOfItemsPage from "./list-items";
import { desertItems } from "@/data/restaurant/single-page";

const Deserts: FC = () => {
  return (
    <div id="deserts" className="order-section top-section">
      <h4>deserts</h4>
      <ListOfItemsPage items={desertItems.cheesecake} navId="cheesecakes" title="cheese cakes" />
      <ListOfItemsPage items={desertItems.limePie} navId="lime" title="lime Pie" />
      <ListOfItemsPage items={desertItems.creamDream} navId="cream" title="cream dream" />
      <ListOfItemsPage items={desertItems.ricePudding} navId="pudding" title=" rice pudding" />
    </div>
  );
};

export default Deserts;
