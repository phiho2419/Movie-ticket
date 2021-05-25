import { USERLOGIN } from "../../Util/setting";

let taiKhoanDN ='';
if(localStorage.getItem(USERLOGIN)){
    let usLogin = JSON.parse(localStorage.getItem(USERLOGIN));

    taiKhoanDN= usLogin.taiKhoan;
}

const stateDefault = {
    taiKhoan: taiKhoanDN
}
export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'DANG_NHAP':{
            state.taiKhoan = action.taiKhoan;
            return {...state}
        }
        default: return { ...state }
    }
}