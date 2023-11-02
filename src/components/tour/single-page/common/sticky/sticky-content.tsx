"use client";
import { FC } from "react";
import useStickyBar from "@/utils/useStickyBar";
import useActiveLinkInStickyBar from "@/utils/useActiveLinkInStickyBar";
import Highlight from "../sections/highlight";
import Itinerary from "../sections/itinerary";

import Accommodations from "../sections/accommodations";
import Location from "@/components/hotels/single-pages/common/sections/location";
import Review from "../sections/review";
import Policies from "../sections/policies";
import StickyTabs from "./sticky-tabs";
import Gallery from "../sections/gallery";
import { menuItems } from "@/data/home/tour/tour-data";
import { galleryData } from "@/data/tour/single-page";


const Description: FC<IDescriptionProps> = ({ data }) => {
    const fix = useStickyBar();
    useActiveLinkInStickyBar();

    return (
        <div className="description-section">
            <StickyTabs fix={false} menuItems={menuItems} />;
            <div className="description-details">
                <Highlight />
                <div className="default-accordion">
                    <Itinerary />
                </div>
                <Gallery galleryData={galleryData} />
                <Accommodations data={data} />
                <Location />
                <Review />
                <Policies />
            </div>
        </div>
    );
};

export default Description;
