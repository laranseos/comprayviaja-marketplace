import { FC } from "react";
import { collectionData } from "@/data/home/restaurant/resatuarant-data";
import Img from "@/utils/BackgroundImageRatio";

const Collection: FC = () => {
  return (
    <section className="p-t-0 section-b-space ratio_40">
      <div className="container">
        <div className="row partition2">
          {collectionData.map((data: ICollectionProps,index) => (
            <div className="col-md-6" key={index}>
              <a href="#">
                <div className="collection-banner p-left text-start">
                  <div className="img-part">
                    <Img src={data.img} className="img-fluid bg-img" alt="" />
                  </div>
                  <div className="contain-banner">
                    <div>
                      <h4>{data.offer}</h4>
                      <h2>{data.title}</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
