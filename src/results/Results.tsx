import { useDispatch, useSelector } from "react-redux";
import { fetchReducer, FetchState } from "../store/fetchReducer";
import { httpGetData } from "../hooks/requests";
import "./Results.css";
import { useEffect } from "react";

function Results() {
  const dispatch = useDispatch();
  const searchItems:any = useSelector<FetchState>((state) => state);
  async function getData() {
    const data = await httpGetData(
      searchItems.currentPage,
      searchItems.searchText,
      searchItems.complianceTypeIds,
    );

        dispatch({type: 'UPDATE_SEARCH', payload: {
            totalCount: data.pageCount, 
            pageSize: data.pageSize,
            siblingCount: 1,
            currentPage: data.currentPage, 
            searchText: searchItems.searchText,
            complianceTypeIds: searchItems.complianceTypeIds,
            loading: false,
            results: data.results,
          } })

  } 
  console.log(searchItems);
  useEffect(()=>{
      getData()
  },[]);
  return <div className={"results"}>
      {searchItems.loading && <p>Loading</p>}
  </div>;
}

export default Results;

// totalCount: number,
// pageSize: number,
// siblingCount: number,
// currentPage: number,
// searchText: string,
// complianceTypeIds: number[],
// loading: boolean,
