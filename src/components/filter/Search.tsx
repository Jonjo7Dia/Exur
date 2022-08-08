import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Reset from './Reset';
import { useDispatch, useSelector } from "react-redux";
import {  FetchState } from "../../store/fetchReducer";
import { HttpGetData } from "../../hooks/requests";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  const searchItems:any = useSelector<FetchState>((state) => state);
 const [searchWord, setSearchWord] = useState('')
  async function getData() {
    dispatch({type: 'UPDATE_SEARCH', payload:{
      ...searchItems, loading: true, results: [],
  }});
     const data = await HttpGetData(
      searchItems.currentPage,
      searchWord,
      searchItems.complianceTypeIds,
    );
    dispatch({type: 'UPDATE_SEARCH', payload:{
      totalCount: data.pageCount, 
          pageSize: data.pageSize,
          siblingCount: 1,
          currentPage: data.currentPage, 
          searchText: searchWord,
          complianceTypeIds: searchItems.complianceTypeIds,
          loading: false,
          results: data.results,
  }});

  } 
  
  return (
    <div className={"search"}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <div className={"searchElements"}>
          <button className={"searchButton"} onClick={getData}>
            <FontAwesomeIcon icon={faSearch} className={"drinkIcon"} />
          </button>
          <input
            className={"searchBar"}
            type="text"
            placeholder={"Søg Produkter"}
            onChange={(e)=>{
              setSearchWord(e.target.value);
            }}
          />
        </div>

        <Checkbox />
        <Reset />
      </form>
    </div>
  );
}

export default Search;
