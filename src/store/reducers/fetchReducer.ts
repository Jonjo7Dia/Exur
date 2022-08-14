import { ActionType } from "../action-types/actionTypes";
import { Action } from "../actions/actions";

const initialState = {
  currentPage: 1,
  searchText: "",
  complianceTypeIds: [],
};

const fetchReducer = (state: any = initialState, action: Action) => {
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
        console.log('reduct', action.payload);
      return {
          ...state,
        currentPage: action.payload.currentPage,
        searchText: action.payload.searchText,
        complianceTypeIds: action.payload.complianceTypeIds,
      };
    default:
      return state;
  }
};

export default fetchReducer;
