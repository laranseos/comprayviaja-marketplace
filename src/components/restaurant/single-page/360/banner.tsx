"use client";
import React, { useMemo, FC } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

const BannerImage: FC = () => {
  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: "/assets/images/360/restaurant.jpg",
      }),
    [],
  );

  return (
    <section className="home_section p-0 single-360-view">
      <div>
        <div className="home home-70">
          <View360 className="is-16by9" zoom={false} disableContextMenu={true} scrollable={false} wheelScrollable={true} autoResize={true} projection={projection} />
        </div>
      </div>
    </section>
  );
};

export default BannerImage;
