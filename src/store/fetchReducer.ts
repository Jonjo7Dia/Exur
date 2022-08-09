export interface FetchState {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  searchText: string;
  complianceTypeIds: number[];
  loading: boolean;
  results: any[];
}
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

type Action = { type: "UPDATE_SEARCH"; payload: FetchState };

export const fetchReducer = (
  state: FetchState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_SEARCH": {
      return {
        ...state,
        complianceTypeIds: action.payload.complianceTypeIds,
        currentPage: action.payload.currentPage,
        loading: action.payload.loading,
        pageSize: action.payload.pageSize,
        results: action.payload.results,
        searchText: "",
        siblingCount: 1,
        totalCount: action.payload.totalCount,
      };
    }
   
    default:
      return state;
  }
};
