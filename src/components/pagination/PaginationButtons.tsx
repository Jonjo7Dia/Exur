import "./PaginationButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { FetchState } from "../../store/fetchReducer";
import { HttpGetData } from "../../hooks/requests";
import { useCallback, useMemo } from "react";

interface Props {
  range: any;
}

function PaginationButtons({ range }: Props) {
  const dispatch = useDispatch();

  const searchItems: any = useSelector<FetchState>((state) => state);




  return (
    <div className={"pagButton"}>
      <button
        className={"pageButton"}
        onClick={() => {
          if (searchItems.currentPage > 1) {
            dispatch({
              type: "UPDATE_SEARCH",
              payload: {
                ...searchItems,
                currentPage: searchItems.currentPage - 1,
              },
            });
    console.log(searchItems);

          }
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className={"searchIcon"} />
      </button>
      {range.map((number: any, index: number) => {
        return (
          <button
            className={`pageButton ${
              searchItems.currentPage === number ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              if (searchItems.currentPage !== number && number !== "...") {
                dispatch({
                  type: "UPDATE_SEARCH",
                  payload: {
                    ...searchItems,
                    currentPage: number,
                  },
                });
              }
            }}
          >
            {number}
          </button>
        );
      })}
      <button
        className={"pageButton"}
        onClick={() => {
          if (searchItems.currentPage < searchItems.totalCount) {
            dispatch({
              type: "UPDATE_SEARCH",
              payload: {
                ...searchItems,
                currentPage: searchItems.currentPage + 1,
              },
            });
            console.log(searchItems);

          }
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} className={"searchIcon"} />
      </button>
    </div>
  );
}

export default PaginationButtons;
