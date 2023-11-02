"use client";
import React, { FC, useState } from "react";
import QuantityInput from "@/components/common/booking-form/flight-form/qty-inputs";
import Button from "@/components/common/btn";
import { CartItems, PlaceOrder } from "@/constant/constant";

const CartItem: FC<CartItemProps> = ({ items,showMenu,setShowMenu }) => {
  const [quantities, setQuantities] = useState<number[]>(items.map((item) => item.quantity));
  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  const handleQuantityChange = (index: number, value: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = value;
    setQuantities(updatedQuantities);
  };

  return (
    <div className="single-sidebar order-cart-right" style={{right:showMenu?"0px":""}}>
      <div onClick={()=> setShowMenu&&setShowMenu(!showMenu)} className="back-btn">back</div>
      <div className="order-cart">
        <h4 className="title">{CartItems}:</h4>
        <div className="cart-items">
          {items.map((item, index) => (
            <div className={`items ${index % 2 === 0 ? "veg" : "non-veg"}`} key={index}>
              <h6>{item.name}</h6>
              <h5>${item.price.toFixed(2)}</h5>
              <div className="qty-box cart_qty">
                <QuantityInput />
              </div>
              <div className="price">
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-bottom">
          <h6 className="sub-total">
            subtotal
            <span>${calculateTotalPrice()}</span>
          </h6>
          <p>delivery charges may apply to your order</p>
          <div className="checkout">
            <Button btnClass="btn btn-solid w-100" name={PlaceOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
