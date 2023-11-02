"use client";
import AppSection from "@/components/home/hotels/minimal/app-section";
import BlogComponent from "@/components/home/hotels/minimal/blog";
import HomeBanner from "@/components/home/hotels/minimal/home-banner";
import StartComponent from "@/components/home/hotels/minimal/start";
import TopCities from "@/components/home/hotels/minimal/top-cities";
import TopDealsComponent from "@/components/home/hotels/minimal/top-deals";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";

const Minimal: React.FC = () => {
  return (
    <>
      <CustomLayout title="overlay-black" userBgClass="user user-light">
        {/* <!-- home section start --> */}
        <HomeBanner />
        <TopCities />
        <TopDealsComponent />
        <AppSection />
        <BlogComponent classTitle="blog_section mt-0 section-b-space ratio_55 bg-white" title={true} />
        <StartComponent />
        {/* <!-- home section end --> */}
      </CustomLayout>
    </>
  );
};

export default Minimal;
