import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Reset from "./Reset";

function Search() {
  return (
    <div className={"search"}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={"searchElements"}>
          <button className={"searchButton"}>
            <FontAwesomeIcon icon={faSearch} className={"searchIcon"} />
          </button>
          <input
            className={"searchBar"}
            type="text"
            placeholder={"Søg Produkter"}
          />
        </div>

        <Checkbox />
        <Reset />
      </form>
    </div>
  );
}

export default Search;
