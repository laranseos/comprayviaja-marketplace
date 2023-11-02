import { exclusionData, inclusionData } from "@/data/tour/single-page";
import { FC } from "react";

const AboutSec: FC = () => {
  return (
    <>
      <div className="about-sec">
        <p className="top-space">Hola Espana! The vibrant country of Spain beckons for an adventure that lets us explore the sights 'n' sounds of this remarkable destination. Visit architechturally brilliant and culture-rich cities of Madrid, Seville, Barcelona, Cordoba, Valencia on this tour and have the experience of a lifetime!</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-sec">
            <h4>inclusion</h4>
            <ul>
              {inclusionData.map((data,index) => (
                <li key={index}>{data.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6 margin-up">
          <div className="about-sec">
            <h4>exclusion</h4>
            <ul>
              {exclusionData.map((data,index) => (
                <li key={index}>{data.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
