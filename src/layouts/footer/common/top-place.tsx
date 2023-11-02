import { TopPlaces } from "@/constant/constant";
import { topPlaceData } from "@/data/footerData";
import Image from "next/image";
import Link from 'next/link';

const TopPlace: React.FC = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-title">
        <h5>{TopPlaces}</h5>
      </div>
      <div className="footer-content">
        <div className="footer-place">
          <div className="row">
            {topPlaceData.map((data: ITopPlaceProps,index) => (
              <div className="col-4" key={index}>
                <div className="place rounded5">
                  <Link href="/pages/portfolio/grid-2-title">
                    <Image src={data.image} className="img-fluid " alt="" width={95.16} height={95.16} />
                    <div className="overlay">
                      <h6>{data.place}</h6>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlace;
