import { weatherData } from "@/data/hotels/single-page";
import { FC } from "react";



const WeatherInfo: FC = () => {
  return (
    <div className="single-sidebar">
      <h6 className="contact-title">weather</h6>
      <ul className="weather-sec">
        {weatherData.map((data: IWeatherDataProps,index) => (
          <li key={index}>
            <h5>{data.date}</h5>
            {data.svg}
            <h6>{data.temp} °C</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherInfo;
