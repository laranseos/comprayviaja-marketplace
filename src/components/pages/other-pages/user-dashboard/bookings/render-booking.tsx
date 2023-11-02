import { FC } from "react";

const RenderBooking: FC<IBookingProps> = ({ id, date, destination, amount, orderDate, status, icon }) => {
  return (
    <div className="dashboard-detail" key={id}>
      <div className="booking-box">
        <div className="date-box">
          <span className="day">tue</span>
          <span className="date">{date}</span>
          <span className="month">aug</span>
        </div>
        <div className="detail-middle">
          <div className="media">
            <div className="icon">
              <i className={icon}></i>
            </div>
            <div className="media-body">
              <h6 className="media-heading">{destination}</h6>
              <p>
                amount paid: <span>${amount}</span>
              </p>
            </div>
            <div className="media-body">
              <h6 className="media-heading">ID: {id}</h6>
              <p>
                order date: <span>{orderDate}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="detail-last">
          {status === "upcoming" ? (
            <>
              <a href="#">
                <i className="fas fa-window-close" data-bs-toggle="tooltip" data-placement="top" title="cancle booking"></i>
              </a>
              <span className="badge bg-info">upcoming</span>
            </>
          ) : status === "past" ? (
            <span className="badge bg-success">past</span>
          ) : (
            <span className="badge bg-secondary">{status}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderBooking;
