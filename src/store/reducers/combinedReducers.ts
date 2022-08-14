import { combineReducers} from 'redux';

import fetchReducer from './fetchReducer';
import resultsReducer from './resultsReducer';

const combinedReducers = combineReducers({
    fetch: fetchReducer,
    results: resultsReducer,
});

export default combinedReducers;

export type State = ReturnType<typeof combinedReducers>