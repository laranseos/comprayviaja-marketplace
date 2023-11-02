import { FC } from "react";
import Slider from "react-slick";
import { slide1 } from "../slider-options";
import Rating from "../rating";

const SliderFour: FC<ISliderFourProps> = ({ sliderData }) => {
  return (
    <Slider className="slide-1 arrow-classic" {...slide1}>
      {sliderData.map((data: ITestimonialProps,index) => (
        <div key={index}>
          <div className="testimonial">
            <div className="top-part">
              <div className="img-part">
                <div className="animation-circle-inverse">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <img src={data.img} className="img-fluid  " alt="" />
                <i className="fas fa-heart heart-icon">
                  <span className="effect"></span>
                </i>
              </div>
            </div>
            <div className="bottom-part">
              <p>{data.desc}</p>
              <h3>{data.name}</h3>
              <Rating />
              <div className="quote-icon">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderFour;
