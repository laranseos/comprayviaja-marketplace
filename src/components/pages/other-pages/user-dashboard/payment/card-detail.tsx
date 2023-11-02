"use client";
import Img from "@/utils/BackgroundImageRatio";
import { FC, useState } from "react";
import EditCardModal from "./edit-card";

const CardDetail: FC<ICardDetailProps> = ({ card }) => {
  const [modal, setModal] = useState(false);

  const handleCardClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="col-xl-4 col-sm-6">
        <div className={`payment-card ${card.type}`}>
          <div className="card-details">
            <div className="card-number">
              <h3>{card.number}</h3>
            </div>
            <div className="valid-detail">
              <div className="title">
                <span>valid</span>
                <span>thru</span>
              </div>
              <div className="date">
                <h3>{card.validThru}</h3>
              </div>
              {card.type === "master" && (
                <div className="primary">
                  <span className="badge bg-pill badge-light">primary</span>
                </div>
              )}
            </div>
            <div className="name-detail">
              <div className="name">
                <h5>{card.name}</h5>
              </div>
              <div className="card-img">
                <Img src={card.imgSrc} className="img-fluid " alt="" />
              </div>
            </div>
          </div>
          <div className="edit-card">
            <a data-bs-toggle="modal" data-bs-target="#edit-card" href="#" onClick={() => setModal(true)}>
              <i className="far fa-edit"></i> edit
            </a>
            <a href="#">
              <i className="far fa-minus-square"></i> delete
            </a>
          </div>
        </div>
        <div className="edit-card-mobile">
          <a data-bs-toggle="modal" data-bs-target="#edit-card" href="#" onClick={handleCardClick}>
            <i className="far fa-edit"></i> edit
          </a>
          <a href="#">
            <i className="far fa-minus-square"></i>
            delete
          </a>
        </div>
      </div>
      <EditCardModal modal={modal} setModal={setModal} />
    </>
  );
};

export default CardDetail;
