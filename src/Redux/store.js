import { createStore , combineReducers } from 'redux'
import { tableReducer } from './tableReducer/reducer'

const rootReducer = combineReducers({
    table: tableReducer
})

export const store = createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )