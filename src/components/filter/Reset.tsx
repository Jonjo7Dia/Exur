import './Reset.css';
import { useDispatch, useSelector } from "react-redux";
import {  FetchState } from "../../store/fetchReducer";
function Reset(){
    const dispatch = useDispatch();
    const searchItems:any = useSelector<FetchState>((state) => state);
    function resetHandler(){
        dispatch({type: 'UPDATE_SEARCH', payload:  {
            totalCount: 14,
            pageSize: 36,
            siblingCount: 1,
            currentPage: 1,
            searchText: "",
            complianceTypeIds: [],
            loading: true,
            results: [],
          }});
        


    }
    return <div className={'reset'}>
        <button className={'resetButton'} onClick={resetHandler}>
            Ryd Filtre
        </button>
    </div>
}

export default Reset;