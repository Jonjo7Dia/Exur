import { ActionType } from "../action-types/actionTypes";

interface CurrentPageAction {
  type: ActionType.CURRENTPAGE;
  payload: number;
}

interface TotalPageAction {
  type: ActionType.TOTALPAGE;
  payload: number;
}

interface SearchTextAction {
  type: ActionType.SEARCHTEXT;
  payload: string;
}

interface ComplianceAction {
  type: ActionType.COMPLIANCE;
  payload: number[];
}

interface EmptyCompAction {
  type: ActionType.EMPTYCOMP;
}

interface ResultsAction {
  type: ActionType.RESULTS;
  payload: any[];
}

interface LoadingAction {
  type: ActionType.LOADING;
  payload: boolean;
}

interface ResetAction {
  type: ActionType.RESET;
}

export type Action =
  | CurrentPageAction
  | TotalPageAction
  | SearchTextAction
  | ComplianceAction
  | EmptyCompAction
  | ResultsAction
  | LoadingAction
  | ResetAction;
