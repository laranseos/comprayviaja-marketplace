import { QuickBitesItems } from "@/data/restaurant/single-page";
import { FC } from "react";
import ListOfItemsPage from "./list-items";

const Bites: FC = () => {
  return (
    <>
      <div id="bites" className="order-section top-section">
        <h4>quick bites</h4>
        <ListOfItemsPage items={QuickBitesItems.potatoItems} navId="chips" title="potato Items" />
        <ListOfItemsPage items={QuickBitesItems.saladItems} navId="salad" title="salad" />
        <ListOfItemsPage items={QuickBitesItems.fries} navId="fries" title="fries" />
        <ListOfItemsPage items={QuickBitesItems.cheeseSticks} navId="sticks" title=" cheese sticks" />
        <ListOfItemsPage items={QuickBitesItems.garlicBread} navId="bread" title="Garlic Bread" />
      </div>
    </>
  );
};

export default Bites;
