import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const reducers = combineReducers({
    
})