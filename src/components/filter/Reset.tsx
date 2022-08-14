import "./Reset.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../store";
import { bindActionCreators } from "redux";

function Reset() {
  const dispatch = useDispatch();
  const {
    setReset,
    setResults,
    setLoading,
  } = bindActionCreators(actionCreators, dispatch);

  const filter = useSelector((state: State) => state.fetch);
  const result = useSelector((state: State) => state.results);
  const searchInput = document.getElementById(
    "searchText"
  ) as HTMLInputElement;

  return (
    <div className={"reset"}>
      <button className={"resetButton"} onClick={()=>{
          searchInput.value ='';
          setReset({searchText: '', currentPage: 1, complianceTypeIds: []});
          setResults([]);
          setLoading(true);
      }}>
        Ryd Filtre
      </button>
    </div>
  );
}

export default Reset;
