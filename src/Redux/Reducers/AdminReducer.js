const stateDefault = {
    mangNguoiDung: [],
    maPhim:'',
}

export const AdminReducer = (state = stateDefault, action) => {

    switch (action.type){
        case 'SET_MANG_NGUOI_DUNG': {
            state.mangNguoiDung = action.mangNguoiDung;
            return {...state}
        }
        case 'SET_MA_PHIM': {
            state.maPhim = action.maPhim;
            return {...state}
        }
        default: return{...state}
    }

}