import { ActionType } from "../action-types/actionTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/actions";

export const setCurrentPage = (page: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENTPAGE,
      payload: page,
    });
  };
};

export const setTotalPage = (page: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOTALPAGE,
      payload: page,
    });
  };
};

export const setSearchText = (word: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCHTEXT,
      payload: word,
    });
  };
};

export const setCompliance = (ids: number[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.COMPLIANCE,
      payload: ids,
    });
  };
};

export const emptyCompliance = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EMPTYCOMP,
    });
  };
};

export const setResults = (results: any[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESULTS,
      payload: results,
    });
  };
};

export const setLoading = (loading: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING,
      payload: loading,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};
