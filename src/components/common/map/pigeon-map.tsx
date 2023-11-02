import NoSsr from "@/utils/HOC/NoSsr";
import { Map, Marker } from "pigeon-maps";
import React from "react";

const PigeonMapComponent = () => {
  return (
    <>
      <NoSsr>
        <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </NoSsr>
    </>
  );
};

export default PigeonMapComponent;
