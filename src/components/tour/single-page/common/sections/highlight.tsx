import Img from "@/utils/BackgroundImageRatio";
import AboutSec from "./high-light.tsx/about-sec";
import { FC } from "react";

const Highlight: FC = () => {
  return (
    <div className="menu-part about tab-pane" id="high-light">
      <AboutSec />
      <div className="detail-img">
        <Img src="/assets/images/tour/spain.jpg" className="img-fluid" alt="" />
      </div>
      <div className="about-sec ">
        <h6>a road rip along spain's mediterranean coast</h6>
        <p>
          A road trip along Spain’s Mediterranean coast is a guarantee of sunshine, lovely beaches, and plenty of destinations with things to see and do. We suggest following the coastline at your own pace, without a fixed timetable and with room to improvise.We choose Barcelona as a starting point because it’s a huge transport hub. You might fancy heading north for a couple of days to see the Costa Brava (Girona): beautiful bays like Roses, coves where the pine trees grow right to the
          shoreline, large seaside resorts and the fishing villages that once inspired Dalí.
        </p>
        <h6>the history of spain's great civilisations</h6>
        <p>In Spain, you can get a history lesson while you enjoy your holiday. Let us show you places to visit where you can discover milestones of human development, like the earliest humans, the birth of art, and the power of the great civilisations.</p>
        <h6>foodies, prepare to be enthused</h6>
        <p className="bottom-space">From tasty tapas to superb seafood and traditional roasts, food in Spain is all about making the most of the best local produce.Whether you're on a city break in Barcelona or Madrid, or you've plumped for a countryside or coastal retreat, Spanish food is full of flavour and character.</p>
      </div>
    </div>
  );
};

export default Highlight;
