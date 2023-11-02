import Img from "@/utils/BackgroundImageRatio";

const BreadcrumbBanner = () => {
  return (
    <section className="breadcrumb-section pt-0">
      <Img src="/assets/images/inner-pages/bg-bread.jpg" className="bg-img img-fluid" alt="" />
      <div className="breadcrumb-content overlay-black">
        <div>
          <h2 className="text-capitalize">sea view hotel</h2>
          <h6>Mina Road, Bur Dubai, Dubai, United Arab Emirates</h6>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
