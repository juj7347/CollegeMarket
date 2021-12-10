import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import chatItems from './Reducers/chatItems';
import collegeItems from './Reducers/collegeItems';
import postTagItems from './Reducers/postTagItems';

const reducers = combineReducers({
    chatItems: chatItems,
    collegeItems: collegeItems,
    postTagItems: postTagItems
})

const initialState = {
    collegeItems: {collegeItem:{name: "",address: ""}},
    postTagItems: {postTagItems:{name: ""}}
}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;