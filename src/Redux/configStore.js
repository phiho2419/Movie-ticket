import thunk from 'redux-thunk';
import { QuanLyPhimReducer } from './Reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './Reducers/QuanLyRapReducer';
import { NguoiDungReducer } from './Reducers/NguoiDungReducer';
import { LichChieuReducer } from './Reducers/LichChieuReducer';
import { AdminReducer } from './Reducers/AdminReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    NguoiDungReducer,
    QuanLyRapReducer,
    LichChieuReducer,
    AdminReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));