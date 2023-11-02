import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const FailedPage: FC<IFailedProps> = ({ img }) => {
    return (
        <section className="bg-inner section-b-space success-section">
            <div className="container">
                <div className="row success-detail mt-0">
                    <div className="col">
                        <Img src={img} className="img-fluid" alt="" />
                        <h2>oops ! we are unable to process your payment</h2>
                        <p>looks like we encountered an error. please try again. if you continue to have issue, try another payment method.</p>
                        <button type="submit" className="btn btn-solid color1">
                            try again
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FailedPage;
