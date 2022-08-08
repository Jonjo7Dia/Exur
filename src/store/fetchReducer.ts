export interface FetchState {
    totalCount: number, 
    pageSize: number,
    siblingCount: number,
    currentPage: number, 
    searchText: string,
    complianceTypeIds: number[],
    loading: boolean,

}
const initialState = {
    totalCount: 14, 
    pageSize: 36,
    siblingCount: 1, 
    currentPage: 1, 
    searchText: '',
    complianceTypeIds: [],
    loading: true,
}

type Action = {type: 'UPDATE_SEARCH', payload:FetchState};

export const fetchReducer= (state:FetchState= initialState, action: Action) => {
    switch(action.type){
        case "UPDATE_SEARCH": {
            return {...state, page: action.payload}
        }
        default: 
        return state;
    }
};

