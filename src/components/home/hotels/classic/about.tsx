"use client";
import TitleComponent from "@/components/common/title/title";
import { About, Hotel, OurHotel } from "@/constant/constant";
import { aboutData } from "@/data/home/hotel/hotel-data";
import Img from "@/utils/BackgroundImageRatio";

const AboutComponent: React.FC<ISearchBoxProps> = ({ classRound }) => {
  return (
    <section className={`about-section three-image ${classRound && classRound}`}>
      <div className="container">
        <TitleComponent title={About} subTitle={OurHotel} span={Hotel} titleClass={"title-3"} />
        <div className="row">
          <div className="col-xl-8">
            <div className="image-section">
              {aboutData.map((image: IAboutClassicProps,index) => (
                <div className="img-box" key={index}>
                  <Img src={image.img} className="img-fluid" alt="" />
                  <div className="no-class">
                    <h3>{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4">
            <div className="about-text">
              <div>
                <h5>
                  special couple <span>dinner</span> offer...
                </h5>
                <h2>
                  redefines the luxury <span>hospitality experience</span>
                </h2>
                <p>Lorem Ipsum is the simply dummy text of the printing is of and type the setting the industry. Lorem ..... </p>
                <Img src="/assets/images/mix/signature.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutComponent;
