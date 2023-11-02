import { FC } from "react";

const BirdAnimation:FC = () => {
    return (
        <div className="bird-animation">
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>
            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>
            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>
            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>
        </div>
    )
}

export default BirdAnimation;