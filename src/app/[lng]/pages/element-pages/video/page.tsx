import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Video1 from "@/components/home/hotels/classic/video";
import VehicleVideo from "@/components/home/cab/modern/vehicle-video";
import Video from "@/components/home/tour/modern/video";

const VideoElement: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" loader="no" logo="dark">
      <VehicleVideo />
      <Video1 />
      <Video />
    </CustomLayout>
  );
};

export default VideoElement;
