import { FC } from "react";

const TitleBar:FC = () => {
    return (
        <div className="title-bar">
            <div className="row">
                <div className="col-3">
                    <p>Airline</p>
                </div>
                <div className="col-6">
                    <p>departure & arrival</p>
                </div>
                <div className="col-3">
                    <p>price</p>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;