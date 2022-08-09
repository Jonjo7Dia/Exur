import { useDispatch, useSelector } from "react-redux";
import {  FetchState } from "../../store/fetchReducer";
import { HttpGetData } from "../../hooks/requests";
import "./Results.css";
import { useEffect } from "react";
import Result from './Result'
import Loading from '../loading/Loading';
function Results() {
  const dispatch = useDispatch();
  const searchItems:any = useSelector<FetchState>((state) => state);
  async function getData() {
     const data = await HttpGetData(
      searchItems.currentPage,
      searchItems.searchText,
      searchItems.complianceTypeIds,
    );
    dispatch({type: 'UPDATE_SEARCH', payload:{
      totalCount: data.pageCount, 
          pageSize: data.pageSize,
          siblingCount: 1,
          currentPage: data.currentPage, 
          searchText: searchItems.searchText,
          complianceTypeIds: searchItems.complianceTypeIds,
          loading: false,
          results: data.results,
  }});

  } 
  useEffect(()=>{
      getData()
  }, []);
  return <div className={"results"}>
      {searchItems.loading && <Loading/>}
      {searchItems.results.map((result:any, index:number)=>{
          return <Result key={index} result={result}/>
      })}
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