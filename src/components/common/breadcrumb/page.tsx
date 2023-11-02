import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import BirdAnimation from "../animation/bird-animation";
import Link from "next/link";

interface IBreadcrumbProps {
  title: string;
  subTitle: string;
  bannerImg?: string;
  videoPath?: string;
  mainTitle?: string;
  animation?: boolean;
  class1?: string;
  class2?: string;
}
const Breadcrumb: FC<IBreadcrumbProps> = ({ title, subTitle, bannerImg, mainTitle, animation, class1, class2, videoPath }) => {
  return (
    <section className={`breadcrumb-section pt-0 ${class1 && class1}`}>
      {videoPath ? (
        <video autoPlay muted loop id="block" className="bg-video" style={{ width: "100%" }}>
          <source src={videoPath} type="video/mp4" />
        </video>
      ) : (
        <Img src={bannerImg} className="bg-img" alt="" />
      )}

      <div className={`breadcrumb-content ${class2 && class2}`}>
        <div>
          {mainTitle ? <h2>{mainTitle}</h2> : <h2>{subTitle}</h2>}
          <nav aria-label="breadcrumb" className="theme-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">{title}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {subTitle}
              </li>
              {mainTitle && (
                <li className="breadcrumb-item active" aria-current="page">
                  {mainTitle}
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>
      {animation && <BirdAnimation />}
      <div className="title-breadcrumb">Comprayviaja</div>
    </section>
  );
};

export default Breadcrumb;
