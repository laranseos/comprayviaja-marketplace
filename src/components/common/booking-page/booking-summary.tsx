import React, { FC } from 'react';
import { BookingSummary, Edit } from '@/constant/constant';
import Img from '@/utils/BackgroundImageRatio';
import { bookingData, hotelData, paymentData } from '@/data/hotels/booking';
import Link from 'next/link';


const Summary: FC = () => {
  return (
    <div className="col-lg-5 booking-order">
      <div className="summery-box">
        <h2>{BookingSummary}</h2>
        <div className="hotel-section">
          <div className="hotel-img">
            <Img src={hotelData.imageSrc} className="img-fluid" alt="" />
          </div>
          <div className="hotel-detail">
            <h6>{hotelData.name}</h6>
            <p>{hotelData.location}</p>
          </div>
        </div>
        <div className="summery-section">
          <div className="box">
            <div className="left">
              <div className="up">
                <h6>check in</h6>
                <h5>{bookingData.checkIn.date}</h5>
              </div>
              <div className="down">
                <h6>check in time</h6>
                <h5>{bookingData.checkIn.time}</h5>
              </div>
            </div>
            <div className="right">
              <div className="up">
                <h6>check out</h6>
                <h5>{bookingData.checkOut.date}</h5>
              </div>
              <div className="down">
                <h6>check out time</h6>
                <h5>{bookingData.checkOut.time}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="summery-section">
          <h5 className="mb-0">{`${bookingData.guestCount} guest, ${bookingData.roomCount} deluxe room, ${bookingData.nightCount} night`}</h5>
          <Link href="/hotel/single-page/classic" className="edit-cls">
            {Edit}
          </Link>
        </div>
        <div className="summery-section">
          <div className="payment-details">
            <h5>payment details</h5>
            <table>
              <tbody>
                <tr>
                  <td>base price</td>
                  <td>${paymentData.basePrice}</td>
                </tr>
                <tr>
                  <td>promo discount</td>
                  <td>${paymentData.promoDiscount}</td>
                </tr>
                <tr>
                  <td>tax & service fees</td>
                  <td>+ ${paymentData.taxServiceFees}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="summery-section">
          <div className="payment-details">
            <table>
              <tbody>
                <tr>
                  <td>payable amount</td>
                  <td className="amount">${paymentData.basePrice + paymentData.promoDiscount + paymentData.taxServiceFees}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
