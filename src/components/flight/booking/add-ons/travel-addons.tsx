import { TravelAddonsConst } from "@/constant/constant";
import { travelAddons } from "@/data/flight/filter-data";
import { FC, Fragment } from "react";

const TravelAddons: FC = () => {

    const flightFare = 2500;
    const total = travelAddons.reduce((acc, addon) => acc + addon.price, flightFare);

    return (
        <div className="flight_detail">
            <div className="summery_box">
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td>flight fare</td>
                            <td>${flightFare}</td>
                        </tr>
                        {travelAddons.map((addon: ITravelAddonsProps, index) => (
                            <Fragment key={index}>
                                <tr className="title">
                                    <td>{addon.title}</td>
                                </tr>
                                <tr>
                                    <td>{addon.details}</td>
                                    <td>+ ${addon.price}</td>
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
                <div className="grand_total">
                    <h5>grand total: <span>${total}</span></h5>
                </div>
            </div>
        </div>

    );
}

export default TravelAddons;
