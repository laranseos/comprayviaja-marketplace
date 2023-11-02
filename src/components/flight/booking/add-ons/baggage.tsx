import { baggageOptions } from "@/data/flight/filter-data";
import { FC } from "react";

const Baggage: FC = () => {

    return (
        <div className="card-body order-menu-section p-0">
            <div className="order-section">
                <div className="order-items">
                    {baggageOptions.map((option: IBaggageProps, index) => (
                        <div className="items" key={index}>
                            <h6>{option.label}</h6>
                            <h5>${option.price.toFixed(2)}</h5>
                            <div className="addtocart_btn">
                                <button
                                    className="add-button add_cart"
                                    title="Add to cart"
                                    tabIndex={0}
                                >
                                    add
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Baggage;
