import TotalItemSlider from "@/components/common/slider-components/total-item-slider";
import { topCitiesData } from "@/data/home/hotel/hotel-data";

const TopCities: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <section className="category-part small-section pb-0 ratio_square">
          <div className="row">
            <div className="col">
              <TotalItemSlider slideData={topCitiesData} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopCities;
