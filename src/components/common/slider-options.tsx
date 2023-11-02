export const slide1 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

export const tourSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: any) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i: any) => (
    <div
      style={{
        border: "1px blue solid",
        color: "white",
        fontWeight: "900",
        fontSize: "calc(18px + (35 - 18) * ((100vw - 320px) / (1920 - 320)))",
        lineHeight: 1,
        opacity: 0.5,
      }}>
      0{i + 1}
    </div>
  ),
};

export const fullSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: any) => (
    <div
      style={{
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: "500",
        color: "white",
        width: "auto",
      }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i: any) => {
    const titles = ["Highlight", "Itinerary", "Review", "Policy", "Accommodations"];
    const title = titles[i];

    return (
      <div
        style={{
          padding: '10px 30px',
          color: 'white'
        }}
      >
        {title}
      </div>
    );
  },
};

export const slide2 = {
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const slide3 = {
  adaptiveHeight: true,
  // centerMode: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  // centerMode: false,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};

export const slide4 = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const slide5 = {
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const slide6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const propertySlider = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export const sliderFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
};

export const sliderNav = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  focusOnSelect: true,
  // centerMode: true,
};


// export const sliderNav = {
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: false,
//   adaptiveHeight: true,
//   focusOnSelect: true,
// };

export const slide7 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const centerSlider = {
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
  ],
};
