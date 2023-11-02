import { instagram } from "@/data/home/hotel/hotel-data";
import InstaSlider from "@/components/common/slider-components/insta-slider";

const Instagram: React.FC = () => {
  return (
    <section className="pt-0">
      <div className="ratio_square instgram-slider container-fluid">
        <div className="row">
          <div className="col p-0">
            <InstaSlider instagramData={instagram} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
