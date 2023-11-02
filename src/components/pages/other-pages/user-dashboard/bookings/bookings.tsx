import { bookingsData } from "@/data/pages/all-page";
import React, { FC } from "react";
import RenderBooking from "./render-booking";
import DashboardTitle from "../common/dashboard-title";

const Bookings: FC = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={"upcoming bookings"} />
        {bookingsData.filter((booking: IBookingProps) => booking.status === "upcoming").map(RenderBooking)}
      </div>
      <div className="dashboard-box">
        <DashboardTitle title={"past bookings"} />
        {bookingsData.filter((booking: IBookingProps) => booking.status === "past").map(RenderBooking)}
      </div>
      <div className="dashboard-box">
        <DashboardTitle title={"cancelled bookings"} />
        {bookingsData.filter((booking: IBookingProps) => booking.status === "cancelled").map(RenderBooking)}
      </div>
    </>
  );
};

export default Bookings;
