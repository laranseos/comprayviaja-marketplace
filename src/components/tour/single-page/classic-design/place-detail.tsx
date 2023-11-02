import Img from "@/utils/BackgroundImageRatio"
import { placeDetailData } from '../../../../data/tour/single-page'
import { FC } from "react"

const PlaceDetail: FC = () => {
    return (
        <div className="col-12">
            <div className="full-width-detail">
                <ul className="place-detail">
                    <li>madrid</li>
                    <li>toledo</li>
                    <li>seville</li>
                    <li>cordoba</li>
                    <li>valencia</li>
                    <li>barcelona</li>
                </ul>
                <div className="about-section three-image about_page">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="image-section">
                                {placeDetailData.map((data,index) =>
                                    <div className="img-box" key={index}>
                                        <Img src={data.img} data-tilt
                                            data-tilt-perspective="110" data-tilt-speed="400" data-tilt-max="1.2"
                                            className="img-fluid" alt="" />
                                        <div className="title-box">
                                            <h3>{data.placeName}</h3>
                                            <h6>{data.empire}</h6>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="about-text about-text-gray">
                                <div>
                                    <div className="right-detail">
                                        <h4>at a glance</h4>
                                        <div className="bottom-detail">
                                            <p>
                                                Hola Espana! The vibrant country of Spain beckons for an
                                                adventure that lets us explore the sights 'n' sounds of this
                                                remarkable destination. Visit architechturally brilliant and
                                                culture-rich cities of Madrid, Seville, Barcelona, Cordoba,
                                                Valencia on this tour and have the experience of a lifetime!
                                            </p>
                                            <p>
                                                Andalusia is a land of fragrant orange blossom and majestic
                                                Moorish architecture and home to a population for whom a love of
                                                music and dance is in their DNA. This nine-night exploration
                                                takes you to southern Spain‘s most handsome cities, all with
                                                thriving cultural and foodie scenes and more than their fair
                                                share of castles, palaces and beautiful gardens.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetail