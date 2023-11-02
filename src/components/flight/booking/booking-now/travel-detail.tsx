import { TravellerDetails } from "@/constant/constant"
import { FC } from "react"

const TravelDetail: FC = () => {
    return (
        <div className="review_box">
            <div className="title-top">
                <h5>{TravellerDetails}</h5>
            </div>
            <div className="flight_detail">
                <div className="row form_flight">
                    <div className="col-md-12">
                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                            <h6>adult 1</h6>
                            <div className="row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputState">title</label>
                                    <select id="inputState" className="form-control">
                                        <option >Choose...</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="first">first name</label>
                                    <input type="text" className="form-control" id="firstt" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="last">last name</label>
                                    <input type="text" className="form-control" id="lastt" />
                                </div>
                            </div>
                        </form>
                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                            <h6>adult 2</h6>
                            <div className="row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="input">title</label>
                                    <select id="input" className="form-control">
                                        <option >Choose...</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="first">first name</label>
                                    <input type="text" className="form-control" id="first" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label htmlFor="last">last name</label>
                                    <input type="text" className="form-control" id="last" />
                                </div>
                            </div>
                        </form>
                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                            <h6>contact details</h6>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputnumber">Phone no:</label>
                                    <input type="number" className="form-control" id="inputnumber" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelDetail