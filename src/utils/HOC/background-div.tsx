import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface IBackgroundDivProps {
  children?: ReactNode;
  titleClass?: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  divImg?: string;
  displayClass?: string;
}

const BackgroundDiv: FC<IBackgroundDivProps> = ({ children, img, titleClass, imgHeight, imgWidth, divImg, displayClass }) => {

  return (
    <div
      className={titleClass}
      style={{
        backgroundImage: `url(${divImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "block",
      }}>
      <Image src={img} className="img-fluid bg-img" alt="" width={imgWidth} height={imgHeight} style={{ display: `${displayClass}` }} />
      {children}
    </div>
  );
};

export default BackgroundDiv;
