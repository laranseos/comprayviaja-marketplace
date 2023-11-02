import FormOne from "@/components/common/booking-form/form1";
import { FC } from "react";

const BookingTable: FC = () => {
  return (
    <section className="book-table section-b-space p-0 single-table">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="table-form">
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTable;
