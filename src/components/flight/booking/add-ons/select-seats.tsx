import Img from "@/utils/BackgroundImageRatio";

const SelectSeats = () => {
  const numRows = 10;
  const numSeatsPerRow = 6;

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= numRows; row++) {
      const seatRow = [];
      for (let seat = 0; seat < numSeatsPerRow; seat++) {
        const seatId = `${row}${String.fromCharCode(65 + seat)}`;
        const seatLabel = `${row}${String.fromCharCode(65 + seat)}`;
        seatRow.push(
          <li className="seat" key={seatId}>
            <input type="checkbox" id={seatId} disabled={seatLabel === "1D" ? true : false} />
            <label htmlFor={seatId}>{seatLabel}</label>
          </li>,
        );
      }
      seats.push(
        <li className={`row row--${row}`} key={row}>
          <ol className="seats" type="A">
            {seatRow}
          </ol>
        </li>,
      );
    }

    return seats;
  };

  return (
    <div className="card-body seat-select">
      <div className="seat-details">
        <ul>
          <li>
            <div className="box taken"></div>
            <h6>taken</h6>
          </li>
          <li>
            <div className="box selected"></div>
            <h6>selected</h6>
          </li>
          <li>
            <div className="box available"></div>
            <h6>available</h6>
          </li>
        </ul>
      </div>
      <div className="plane">
        <div className="cockpit">
          <div>
            <Img src="/assets/images/flights/cockpit.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="exit exit--front fuselage"></div>
        <ol className="cabin fuselage">{renderSeats()}</ol>
        <div className="exit exit--back fuselage"></div>
      </div>
    </div>
  );
};

export default SelectSeats;
