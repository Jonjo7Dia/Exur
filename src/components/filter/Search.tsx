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
  const filter = useSelector((state: State) => state.fetch);

  const [searchWord, setSearchWord] = useState(filter.searchText);
  function submitHandler(e: any) {
    e.preventDefault();
    setSearchText(searchWord);
    setCurrentPage(1);
    setResults([]);
    setLoading(true);
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
            defaultValue={searchWord}
            placeholder={"Søg Produkter"}
            onChange={(e)=>{
              setSearchWord(e.target.value)
            }}
            id = {'searchText'}
          />
        </div>

        <Checkbox />
        <Reset />
      </form>
    </div>
  );
}

export default Search;
