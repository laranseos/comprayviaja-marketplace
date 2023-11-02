import InstaSlider from "@/components/common/slider-components/insta-slider";
import TitleThree from "@/components/common/title/title-three";
import { instagram } from "@/data/home/restaurant/resatuarant-data";

const Instagram: React.FC<IGalleryPageProps> = ({ title }) => {
  return (
    <section className={title ? "" : "pt-0"}>
      {title && <TitleThree title="rica" classTitle="title-1" subTitle="instagram" />}
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
