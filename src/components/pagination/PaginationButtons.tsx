import "./PaginationButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  range: any;
}
function PaginationButtons({ range }: Props) {
  return (
    <div className={"pagButton"}>
      <button className={"pageButton"}>
        <FontAwesomeIcon icon={faChevronLeft} className={"searchIcon"} />
      </button>
      {range.map((number: any, index: number) => {
        return (
          <button className={`pageButton`} key={index}>
            {number}
          </button>
        );
      })}
      <button className={"pageButton"}>
        <FontAwesomeIcon icon={faChevronRight} className={"searchIcon"} />
      </button>
    </div>
  );
}

export default PaginationButtons;
