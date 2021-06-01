import thunk from 'redux-thunk';
import { QuanLyPhimReducer } from './Reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './Reducers/QuanLyRapReducer';
import { NguoiDungReducer } from './Reducers/NguoiDungReducer';
import { LichChieuReducer } from './Reducers/LichChieuReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    NguoiDungReducer,
    QuanLyRapReducer,
    LichChieuReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));