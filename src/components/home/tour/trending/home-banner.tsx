"use client";
import { FC, useEffect } from "react";
import { BookYourTravel } from "@/constant/constant";

const HomeBanner: FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const mass = Math.min(20, 1 - 0.002 * window.pageYOffset);
      const rotateObjects = document.querySelectorAll(".effect_content h1");
      rotateObjects.forEach((object) => {
        const element = object as HTMLElement;
        element.style.transform = `scale(${mass})`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home_effect effect-cls pt-0">
      <div className="snow"></div>
      <div
        className="effect_image"
        style={{
          backgroundImage: `url(${"/assets/images/tour/background/1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "block",
        }}>
        <img src="/assets/images/tour/background/2.png" alt="" />
        <div className="effect_content">
          <div>
            <h1>{BookYourTravel}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
