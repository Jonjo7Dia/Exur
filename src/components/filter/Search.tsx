import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Reset from "./Reset";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../store";
import { bindActionCreators } from "redux";
import { useState } from "react";
function Search() {
  const dispatch = useDispatch();
  const { setCurrentPage, setResults, setLoading, setSearchText } =
    bindActionCreators(actionCreators, dispatch);
  const [searchWord, setSearchWord] = useState("");
  function submitHandler(e: any) {
    e.preventDefault();
    setSearchText(searchWord);
    setCurrentPage(1);
    setResults([]);
    setLoading(true);
  }
  function searchWordHandler(e: any) {
    setSearchWord(e.target.value);
  }
  return (
    <div className={"search"}>
      <form action="" onSubmit={submitHandler}>
        <div className={"searchElements"}>
          <button className={"searchButton"} onClick={submitHandler}>
            <FontAwesomeIcon icon={faSearch} className={"searchIcon"} />
          </button>
          <input
            className={"searchBar"}
            type="text"
            placeholder={"Søg Produkter"}
            onChange={searchWordHandler}
          />
        </div>

        <Checkbox />
        <Reset />
      </form>
    </div>
  );
}

export default Search;
