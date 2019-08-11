import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer,devToolsEnhancer());

//handle all the data loading There


export default store;
