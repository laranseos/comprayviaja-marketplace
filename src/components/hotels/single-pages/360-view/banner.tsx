"use client";
import React, { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

const BannerImage = () => {
  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: "/assets/images/360/room.jpg",
      }),
    [],
  );

  return <View360 className="is-16by9" zoom={false} disableContextMenu={true} scrollable={false} wheelScrollable={true} autoResize={true} projection={projection} />;
};

export default BannerImage;
