import { addonsData } from "@/data/flight/filter-data";
import { FC } from "react";

const Addons: FC = () => {

    return (
        <div className="card-body order-menu-section">
            <div className="order-section">
                <div className="order-items">
                    {addonsData.map((addon: IAddonsMealProps, index) => (
                        <div className={`items ${index % 2 === 0 ? 'veg' : 'non-veg'}`} key={index}>
                            <h6>{addon.label}</h6>
                            <p>{addon.description}</p>
                            <h5>${addon.price.toFixed(2)}</h5>
                            <div className="addtocart_btn">
                                <button
                                    className="add-button add_cart"
                                    title="Add to cart"
                                    tabIndex={0}
                                >
                                    add
                                </button>
                                <div className="qty-box cart_qty">
                                    <div className="input-group">
                                        <button
                                            type="button"
                                            className="btn qty-left-minus"
                                            data-type="minus"
                                            data-field=""
                                            tabIndex={0}
                                        >
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                        <input
                                            type="text"
                                            name="quantity"
                                            className="form-control input-number qty-input"
                                            value="1"
                                            tabIndex={0}
                                        />
                                        <button
                                            type="button"
                                            className="btn qty-right-plus"
                                            data-type="plus"
                                            data-field=""
                                            tabIndex={0}
                                        >
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Addons;
