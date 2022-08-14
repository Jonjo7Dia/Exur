import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { HttpGetData } from "../../hooks/requests";
import { actionCreators, State } from "../../store";
import Loading from "../loading/Loading";
import Result from './Result';
import "./Results.css";

function Results() {
  const dispatch = useDispatch();
  const { setLoading, setResults, setTotalPage} =
    bindActionCreators(actionCreators, dispatch);
  const filter = useSelector((state: State) => state.fetch);
  const results = useSelector((state: State) => state.results);
  async function getData() {
    const fetchedData = await HttpGetData(
      filter.currentPage,
      filter.searchText,
      filter.complianceTypeIds
    );
    if (fetchedData) {
      setLoading(false);
      setResults(fetchedData.results);
      setTotalPage(fetchedData.pageCount);
    }
  }
  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <div className={"results"}>
      {results.loading && <Loading />}
      {results.results.map((result: any, index: number) => {
        return <Result key={index} result={result} />;
      })}
    </div>
  );
}

export default Results;

// totalCount: number,
// pageSize: number,
// siblingCount: number,
// currentPage: number,
// searchText: string,
// complianceTypeIds: number[],
// loading: boolean,
