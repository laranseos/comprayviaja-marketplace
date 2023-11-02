import Img from "@/utils/BackgroundImageRatio";
import { FC, useState } from "react";
import CardModal from "./add-card";
import { cardsData } from "@/data/pages/all-page";
import { AddNewCard, CardsPayment } from "@/constant/constant";
import CardDetail from "./card-detail";
import DashboardTitle from "../common/dashboard-title";

const PaymentCard: FC = () => {
  const [modal, setModal] = useState(false);

  const handleCardClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={CardsPayment} />
        <div className="dashboard-detail">
          <div className="row card-payment">
            {cardsData.map((card, index) => (
              <CardDetail card={card} key={index} />
            ))}
            <div className="col-xl-4 col-sm-6">
              <div className="payment-card add-card">
                <div data-bs-toggle="modal" data-bs-target="#add-card" className="card-details" onClick={handleCardClick}>
                  <div>
                    <i className="fas fa-plus"></i>
                    <h5>{AddNewCard}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardModal modal={modal} setModal={setModal} />
    </>
  );
};

export default PaymentCard;
