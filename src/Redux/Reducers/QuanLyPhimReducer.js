const stateDefault = {
    mangPhim: [
         
    ],
    chiTietPhim: {

    }
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_MANG_PHIM': {
            state.mangPhim = action.mangPhim;
            return { ...state };
        }
        case 'SET_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state };

        }
        default: return { ...state }
    }
}
