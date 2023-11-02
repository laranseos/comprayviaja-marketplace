import { BookNow, Enquiry } from "@/constant/constant";

const BookingPage = () => {
    return (
        <div className="book-panel">
            <button data-bs-toggle="modal" data-bs-target="#booknowModal" type="button" className="btn bottom-btn theme-color">{BookNow}</button>
            <button data-bs-toggle="modal" data-bs-target="#enquiryModal" type="button" className="btn bottom-btn">{Enquiry}</button>
        </div>
    )
}

export default BookingPage;