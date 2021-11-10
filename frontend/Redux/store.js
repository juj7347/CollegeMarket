import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import chatItems from './Reducers/chatItems';

const reducers = combineReducers({
    chatItems: chatItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;