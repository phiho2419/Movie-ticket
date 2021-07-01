const stateDefault = {
    commentPhim: [
        { userName: 'Nguyen Van B',thoiGianDanhGia:'24/01 10:10 AM', diemDanhGia: 9, commentDanhGia: 'Xuất sắc lắm quý dị ' },
        { userName: 'Pham Thi A',thoiGianDanhGia:'24/02 10:10 AM', diemDanhGia: 3, commentDanhGia: 'Dở lắm quý dị ' },
        { userName: 'Alabamaba',thoiGianDanhGia:'24/03 10:10 AM', diemDanhGia: 5, commentDanhGia: ' OMG !!! ' },
    ],
    commentRap: [
        { userName: 'Nguyen Van Teo',thoiGianDanhGia:'24/01 10:10 AM', diemDanhGia: 9, commentDanhGia: 'Ghế ngồi thoải mái ' },
        { userName: 'Pham Thi Bo',thoiGianDanhGia:'24/02 10:10 AM', diemDanhGia: 3, commentDanhGia: 'Nhân viên thái độ ' },
        { userName: 'Biden',thoiGianDanhGia:'24/03 10:10 AM', diemDanhGia: 5, commentDanhGia: ' SO GOOD !!! ' },

    ],
}

export const CommentReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'COMMENT_PHIM': {
            state.commentPhim.push(action.danhGia);
            return { ...state }
        }
        case 'COMMENT_RAP': {
            state.commentRap.push(action.danhGia);
            return { ...state }
        }

        default: return { ...state }
    }

}

