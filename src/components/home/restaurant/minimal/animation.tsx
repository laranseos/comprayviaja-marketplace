"use client";
import { FC, useEffect, useRef } from "react";

const ParallaxEffect: FC = () => {
  const food1Ref = useRef<HTMLDivElement | null>(null);
  const food2Ref = useRef<HTMLDivElement | null>(null);
  const food3Ref = useRef<HTMLDivElement | null>(null);
  const food4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (food1Ref.current) {
        food1Ref.current.style.transform = `rotate(${scrollTop * 0.01}rad)`;
      }

      if (food2Ref.current) {
        food2Ref.current.style.transform = `rotate(${scrollTop * 0.01}rad)`;
      }

      if (food3Ref.current) {
        food3Ref.current.style.transform = `rotate(${scrollTop * 0.005}rad)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-effect">
      <div className="food-img food1" ref={food1Ref} style={{ top: "49.5336%" }}>
        <img src="/assets/images/restaurant/food/1.png" alt="Food 1" />
      </div>
      <div className="food-img food2" ref={food2Ref} style={{ top: "85.1151%" }}>
        <img src="/assets/images/restaurant/food/2.png" alt="Food 2" />
      </div>
      <div className="food-img food3" ref={food3Ref} style={{ top: "65.1151%" }}>
        <img src="/assets/images/restaurant/food/3.png" alt="Food 3" />
      </div>
      <div className="food-img food4" ref={food4Ref} style={{ top: "33.4873%" }}>
        <img src="/assets/images/restaurant/food/4.png" alt="Food 4" />
      </div>
    </div>
  );
};

export default ParallaxEffect;
