"use client";
import { FC } from "react";

import StickyTabs from "@/components/common/single-page/sticky-tabs/page";
import About from "../../common/sections/about";
import Rooms from "../../common/sections/rooms";
import Facilities from "../../common/sections/facility";
import Location from "../../common/sections/location";
import Policies from "../../common/sections/policies";
import Reviews from "../../common/sections/reviews";
import useStickyBar from "@/utils/useStickyBar";
import useActiveLinkInStickyBar from "@/utils/useActiveLinkInStickyBar";

const Description: FC = () => {
  const fix = useStickyBar();
  useActiveLinkInStickyBar();

  return (
    <div className="description-section">
      <StickyTabs fix={fix} />
      <div className="description-details">
        <About />
        <Rooms />
        <Facilities />
        <Location />
        <Reviews />
        <Policies />
      </div>
    </div>
  );
};

export default Description;
