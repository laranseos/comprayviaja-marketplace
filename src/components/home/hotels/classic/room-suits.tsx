import { About, Hotel, RoomsSuits } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import { roomSuitData } from "@/data/home/hotel/hotel-data";
import SliderThree from "@/components/common/slider-components/slider3";
import Animation from "@/components/common/animation/animation";

const RoomSuits: React.FC = () => {
  return (
    <section className="ticket-section section-b-space white-section animated-section">
      <Animation />
      <div className="container">
        <TitleComponent title={About} subTitle={RoomsSuits} span={Hotel} titleClass={"title-3"} />
        <div className="slide-1">
          <SliderThree slideData={roomSuitData} />
        </div>
      </div>
    </section>
  );
};
export default RoomSuits;
