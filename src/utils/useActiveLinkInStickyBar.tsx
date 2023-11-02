"use client";
import { useEffect } from "react";

const useActiveLinkInStickyBar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".desc-box");
    const navLi = document.querySelectorAll("#navigation ul li a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop; // Cast to HTMLElement
        const sectionHeight = section.clientHeight;

        if (window.scrollY > 578 && window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          current = section.getAttribute("id") || current;
        }
      });
      navLi.forEach((el) => {
        if (window.scrollY > 578 && el.getAttribute("href") === `#${current}`) {
          const closestLi = el.closest("li") as HTMLLIElement | null; // Cast the result to the desired type
          if (closestLi) {
            closestLi.classList.add("active");
          }
        } else {
          const closestLi = el.closest("li") as HTMLLIElement | null; // Cast the result to the desired type
          if (closestLi) {
            closestLi.classList.remove("active");
          }
        }
        if (window.scrollY < 578) {
          const firstLi = navLi[0].closest("li") as HTMLLIElement | null; // Cast the result to the desired type
          if (firstLi) {
            firstLi.classList.add("active");
          }
        }
      });
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);
};

export default useActiveLinkInStickyBar;
