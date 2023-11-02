"use client";
import { useState, FC } from "react";
import { addressesData } from "@/data/restaurant/booking";
import CartModal from "./cart-modal";
import { AddNewAddress, DeliveryAddress } from "@/constant/constant";

const CheckoutProcess: FC = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const handleEditAddress = (action: string) => {
    if (action === "add") {
      setModal(true);
      setTitle("Add New Address");
    } else {
      setModal(true);
      setTitle("Edit New Address");
    }
  };

  return (
    <>
      <div className="checkout-box">
        <h4 className="title">{DeliveryAddress}:</h4>
        <div className="sub-title">
          <h5>saved address</h5>
          <a href="#" data-bs-toggle="modal" data-bs-target="#add-address" className="add-new" onClick={() => handleEditAddress("add")}>
            + {AddNewAddress}
          </a>
        </div>
        <div className="row address-sec">
          {addressesData.map((address,index) => (
            <div className="select-box col-xl-4 col-md-6" key={index}>
              <div className="address-box">
                <div className="top">
                  <h6>
                    {address.name} <span>{address.type}</span>
                  </h6>
                </div>
                <div className="middle">
                  <div className="address">
                    <p>{address.address}</p>
                    <p>{address.city}</p>
                    <p>{address.postalCode}</p>
                  </div>
                  <div className="number">
                    <p>
                      mobile: <span>{address.mobile}</span>
                    </p>
                  </div>
                </div>
                <div className="bottom">
                  <button className="bottom_btn" onClick={() => handleEditAddress("edit")}>
                    edit
                  </button>
                  <button className="bottom_btn">remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartModal modal={modal} setMapModal={setModal} type={title} />
    </>
  );
};

export default CheckoutProcess;
