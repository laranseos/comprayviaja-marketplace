'use client'
import { FC, useEffect } from 'react';
import TabContentComponent from "../common/tab-content"
import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { getTourData } from "@/redux-toolkit/tour-api";
import Slider from 'react-slick';
import { slide2 } from '@/components/common/slider-options';
import ProductBox from '@/components/common/elements/product-box/product-box';
import BookingJourney from '../common/sidebar/booking-journey';
import Link from 'next/link'
import PlaceDetail from './place-detail';


const MainPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.tour);

    useEffect(() => {
        dispatch(getTourData());
    }, [dispatch]);

    return (
        <section className="single-section bg-inner small-section">
            <div className="container">
                <div className="row">
                    <PlaceDetail />
                    <div className="col-12 small-section pb-0">
                        <div className="description-section tab-section">
                            <TabContentComponent data={data} />
                        </div>
                    </div>
                    <div className="col-12 booking-bottom-section">
                        <div className="row">
                            <div className="col-md-6">
                                <BookingJourney />
                            </div>
                            <div className="col-md-6">
                                <div className="single-sidebar mt-0">
                                    <div className="selection-section">
                                        <h4 className="title">Quick inquiry</h4>
                                        <div className="book-btn-section border-top-0">
                                            <form className="detail-top" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                                                <input type="text" className="form-control" placeholder="Full Name" />
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                                <input type="number" className="form-control" placeholder="Phone no:" />
                                                <textarea className="form-control" rows={3} placeholder="Your Query"></textarea>
                                                <div className="text-end">
                                                    <Link href="/tour/booking/booking-page" className="btn btn-rounded btn-sm color1">quick inquiry</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="special-section related-box ratio3_2 grid-box">
                            <Slider {...slide2} className="slider-3 no-arrow">
                                {data.map((items,index) =>
                                    <ProductBox data={items} view="minimal" key={index} />
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainPage