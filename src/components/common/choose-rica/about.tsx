import { FC } from "react";

interface IAboutProps {
  aboutData: IStartProps[];
}
const AboutCommon: FC<IAboutProps> = ({ aboutData }) => {
  return (
    <>
      {aboutData.map((data: IStartProps,index) => (
        <div className="col-xl-3 col-6" key={index}>
          <div className="highlight-box wow fadeInUp">
            <div>{data.svg}</div>
            <div className="content-sec">
              <h5>{data.title}</h5>
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCommon;
