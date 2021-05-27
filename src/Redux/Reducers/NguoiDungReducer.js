import { USERLOGIN } from "../../Util/setting";

let taiKhoanDN ='';
if(localStorage.getItem(USERLOGIN)){
    let usLogin = JSON.parse(localStorage.getItem(USERLOGIN));
    taiKhoanDN= usLogin.taiKhoan;
}

const stateDefault = {
    taiKhoan: taiKhoanDN,
    user: {}
}
export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP':{
            state.taiKhoan = action.taiKhoan;
            return {...state}
        }
        case 'THONG_TIN_NGUOI_DUNG':{
            state.user = action.user;
            return {...state}
        }
        default: return { ...state }
    }
}