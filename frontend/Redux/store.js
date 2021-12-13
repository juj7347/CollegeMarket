import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import chatItems from './Reducers/chatItems';
import collegeItems from './Reducers/collegeItems';
import postTagItems from './Reducers/postTagItems';
import filterItems from './Reducers/filterItems';

const reducers = combineReducers({
    chatItems: chatItems,
    collegeItems: collegeItems,
    postTagItems: postTagItems,
    filterItems: filterItems
})

const initialState = {
    collegeItems: {collegeItem:{name: "",address: ""}},
    postTagItems: {postTagItems:{name: ""}},
    filterItems: {category: {category: {_id: "", name: ""}}, search: {search: ""}}
}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;