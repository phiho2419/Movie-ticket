const stateDefault = {
    mangPhim: [
         
    ],
    chiTietPhim: {

    },
    thongTinPhim:{

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
        case 'SET_THONG_TIN_PHIM': {
            state.thongTinPhim = action.thongTinPhim;
            return { ...state };

        }
        default: return { ...state }
    }
}
