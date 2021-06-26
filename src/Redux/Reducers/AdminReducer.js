const stateDefault = {
    mangNguoiDung: [],
    thongTinPhim: {},
    thongTinNguoiDung: {},
}

export const AdminReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'SET_MANG_NGUOI_DUNG': {
            state.mangNguoiDung = action.mangNguoiDung;
            return { ...state }
        }
        case 'SET_MA_PHIM': {
            state.thongTinPhim = action.thongTinPhim;
            return { ...state }
        }
        case 'SET_NGUOI_DUNG': {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state }
        }
        case 'SET_MANG_TIM_KIEM_NGUOI_DUNG': {
            state.mangNguoiDung = action.mangNguoiDung;
            return { ...state }
        }
        default: return { ...state }
    }

}