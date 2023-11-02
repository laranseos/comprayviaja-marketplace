/**
 * It takes in the current page number, the total number of pages, and the function to set the current
 * page number, and returns a list of page numbers to display in the pagination
 * @returns A pagination component that is being used to navigate through the pages of the application.
 */
import { RootState } from "@/redux-toolkit/store";
import usePagination from "@/utils/UsePagination";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPaginationProps } from "../grid-page.d";

const Pagination: FC<IPaginationProps> = ({ totalPages1 }) => {
  const dispatch = useDispatch();
  const { toPage } = useSelector((state: RootState) => state.gridReducer);

  const pages = usePagination({ toPage: toPage, totalPages: totalPages1 });

  if (1 !== totalPages1 && totalPages1 !== 0) {
    return (
      <nav aria-label="Page navigation example" className="pagination-section">
        <ul className="pagination">
          <li className="page-item">
            <div className="page-link" aria-label="Previous" onClick={() => dispatch({ type: "toPage", payload: 1 })}>
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                dispatch({ type: "toPage", payload: toPage > 1 ? toPage - 1 : toPage });
              }}>
              <span aria-hidden="true">{"<"}</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          {pages.map((data, i) => (
            <li
              className={`page-item ${data === toPage ? "active" : ""}`}
              key={i}
              onClick={() => {
                dispatch({ type: "toPage", payload: data });
              }}>
              <div className="page-link">{data}</div>
            </li>
          ))}

          <li className="page-item">
            <div
              className="page-link"
              aria-label="Next"
              onClick={() => {
                dispatch({ type: "toPage", payload: toPage < totalPages1 ? toPage + 1 : toPage });
              }}>
              <span aria-hidden="true">{">"}</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" aria-label="Next" onClick={() => dispatch({ type: "toPage", payload: totalPages1 })}>
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>
      </nav>
    );
  } else {
    return null
  }
};

export default Pagination;
