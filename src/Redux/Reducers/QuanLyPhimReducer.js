const stateDefault = {
    mangPhim: [
        { maPhim: 1, tenphim: 'Kiều', hinhAnh: 'https://picsum.photos/200/200', moTa: 'Phim đang được chiếu tất cả các rạp trên toàn quốc' },
        { maPhim: 2, tenphim: 'BatMan', hinhAnh: 'https://picsum.photos/200/200', moTa: 'Phim đang được chiếu tất cả các rạp trên toàn quốc' }
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
