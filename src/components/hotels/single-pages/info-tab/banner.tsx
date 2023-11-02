const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb-section no-bg pt-0 hotel-info-video"
        id="block"
        style={{ width: "100%" }}>
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            inset: 0,
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundImage: "none",}}>
          <video
            autoPlay
            loop
            muted
            style={{
              margin: "auto",
              position: "absolute",
              zIndex: -1,
              top: "50%",
              left: "0%",
              transform: "translate(0%, -50%)",
              visibility: "visible",
              opacity: 1,
              width: "100%",
              height: "auto",}}>
            <source src="/assets/video/hotel.mp4" type="video/mp4" />
            <source src="/assets/video/hotel.webm" type="video/webm" />
            <source src="/assets/video/hotel.ogv" type="video/ogg" />
          </video>
        </div>
      </section>
    </>
  );
};

export default Banner;
