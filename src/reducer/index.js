import { combineReducers } from "redux";
import todoReducer from './Todoreducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todoReducer,
    visibilityFilter
})

export default rootReducer