import { FC } from "react";
import { activities, chartData, chartDataOption, counters } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard: FC = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-intro">
        <h5>
          welcome! <span>Mark Enderess</span>
        </h5>
        <p>you have completed 70% of your profile. add basic info to complete profile.</p>
        <div className="complete-profile">
          <div className="row">
            {[
              { text: "verified email ID", icon: "far fa-check-square" },
              { text: "verified phone number", icon: "far fa-check-square" },
              { text: "complete basic info", icon: "far fa-window-close", className: "not-complete" },
            ].map((item, index) => (
              <div className="col-xl-4" key={index}>
                <div className={`complete-box ${item.className || ""}`}>
                  <i className={item.icon}></i>
                  <h6>{item.text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="counter-section">
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-xl-3 col-sm-6" key={index}>
              <div className="counter-box">
                <Img src={counter.iconSrc} className="img-fluid" alt="" />
                <h3>{counter.count}</h3>
                <h5>{counter.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-info">
        <div className="row">
          <div className="col-md-6">
            <div id="chart">
              <ReactApexChart type="radialBar" width={300} height={319} options={chartDataOption} series={chartData.series} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="activity-box">
              <h6>recent activity</h6>
              <ul>
                {activities.map((activity, index) => (
                  <li key={index} className={activity.className || ""}>
                    <i className={activity.icon}></i>
                    {activity.text}
                    <span>{activity.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
