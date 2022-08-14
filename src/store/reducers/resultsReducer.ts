import { ActionType } from "../action-types/actionTypes";
import { Action } from "../actions/actions";

const initialState = {
  totalCount: 14,
  loading: true,
  results: [],
};

const resultsReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.RESULTS:
      return { ...state, results: action.payload };
    case ActionType.LOADING:
      return { ...state, loading: action.payload };
    case ActionType.TOTALPAGE:
      return { ...state, totalCount: action.payload };

    default:
      return state;
  }
};

export default resultsReducer;
