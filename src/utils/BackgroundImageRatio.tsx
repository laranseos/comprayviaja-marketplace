"use client";
import React, { useEffect, useRef, FC } from "react";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined;
}

const Img: FC<ImgProps> = (props) => {
  const bgImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = bgImg.current;
    if (image && image.classList.contains("bg-img")) {
      const parentElement = image.parentElement as HTMLElement;
      const src = props.src;

      var regex = /bg-bottom/g;
      var match = props.className?.match(regex);

      parentElement.classList.add("bg-size");
      image.style.display = "none";
      parentElement.setAttribute(
        "style",
        `
        background-image: url(${src});
        background-size: cover; 
        background-position: ${match && match[0] === "bg-bottom" ? "bottom" : "center"};
        background-repeat: no-repeat;
        display: block;
        `,
      );
    }
  }, [props.src]);

  return <img ref={bgImg} {...props} alt="" />;
};

export default Img;
