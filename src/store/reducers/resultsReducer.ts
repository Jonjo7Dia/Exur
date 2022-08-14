import { ActionType } from "../action-types/actionTypes";
import { Action } from "../actions/actions";

const initialState = {
  totalCount: 14,
  pageSize: 36,
  siblingCount: 1,
  currentPage: 1,
  searchText: "",
  complianceTypeIds: [],
  loading: true,
  results: [],
};

const reducer = (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENTPAGE:
      return { ...state, currentPage: action.payload };
    case ActionType.COMPLIANCE:
      return { ...state, complianceTypeIds: action.payload };
    case ActionType.EMPTYCOMP:
      return { ...state, complianceTypeIds: [] };
    case ActionType.SEARCHTEXT:
      return { ...state, searchText: action.payload };
    case ActionType.RESET:
      return {
        ...state,
        totalCount: 14,
        pageSize: 36,
        siblingCount: 1,
        currentPage: 1,
        searchText: "",
        complianceTypeIds: [],
        loading: true,
        results: [],
      };
    case ActionType.RESULTS:
      return { ...state, results: action.payload };
    case ActionType.LOADING:
        return {...state, loading: action.payload};
    case ActionType.TOTALPAGE:
        return {...state, totalCount: action.payload};
  }
};

export default reducer;
