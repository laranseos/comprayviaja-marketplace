import { CartItems } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

 interface CartEmpty {
  showMenu:boolean
  setShowMenu:(val:boolean)=>void
}
const CartEmpty: FC<CartEmpty> = ({setShowMenu,showMenu}) => {
  return (
    <div className="single-sidebar order-cart-right" style={{right:showMenu?"0px":""}}>
      <div className="back-btn" onClick={()=>setShowMenu(!showMenu)}>back</div>
      <div className="order-cart">
        <h4 className="title">{CartItems}:</h4>
        <div className="empty-cart">
          <h5>cart is empty!!</h5>
          <Img src="/assets/images/icon/empty-cart.png" className="img-fluid" alt="" />
          <p>looks like you have not order something. Go ahead, order some yummy food from menu.. </p>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
