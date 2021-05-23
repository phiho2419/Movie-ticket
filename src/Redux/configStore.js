import thunk from 'redux-thunk';
import { QuanLyPhimReducer } from './Reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './Reducers/QuanLyRapReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyRapReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));