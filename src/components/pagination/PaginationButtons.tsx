import "./PaginationButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../store";
import { bindActionCreators } from "redux";

interface Props {
  range: any;
}
function PaginationButtons({ range }: Props) {
  const dispatch = useDispatch();
  const { setCurrentPage, setResults, setLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const filter = useSelector((state: State) => state.fetch);
  const results = useSelector((state: State) => state.results);
  function previousPageHandler() {
    if (filter.currentPage > 1) {
      setCurrentPage(filter.currentPage - 1);
      setResults([]);
      setLoading(true);
    }
  }
  function changePage(number: any) {
    if (number !== filter.currentPage && number !== "...") {
      setCurrentPage(number);
      setResults([]);
      setLoading(true);
    }
  }
  function nextPageHandler() {
    if (filter.currentPage < results.totalCount) {
      setCurrentPage(filter.currentPage + 1);
      setResults([]);
      setLoading(true);
    }
  }

  return (
    <div className={"pagButton"}>
      <button className={"pageButton"} onClick={previousPageHandler}>
        <FontAwesomeIcon icon={faChevronLeft} className={"searchIcon"} />
      </button>
      {range.map((number: any, index: number) => {
        return (
          <button
            className={`pageButton ${
              filter.currentPage === number ? "active" : ""
            }`}
            key={index}
            onClick={() => changePage(number)}
          >
            {number}
          </button>
        );
      })}
      <button className={"pageButton"} onClick={nextPageHandler}>
        <FontAwesomeIcon icon={faChevronRight} className={"searchIcon"} />
      </button>
    </div>
  );
}

export default PaginationButtons;
