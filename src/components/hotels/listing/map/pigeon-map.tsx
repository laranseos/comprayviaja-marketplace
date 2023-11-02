import React from "react";
import { Map } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const PigeonMap = () => {
  return (
      <Map
        provider={osm}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      />
  );
};

export default PigeonMap;
