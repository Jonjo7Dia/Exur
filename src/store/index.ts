import {createStore} from 'redux';

import {fetchReducer} from './fetchReducer';

 const store = createStore(fetchReducer);

 export default store;