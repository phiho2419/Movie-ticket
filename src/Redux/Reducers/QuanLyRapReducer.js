const stateDefault = {
    mangRap:[

    ],
    chiTietRap: [

    ],
    tenRap:'',
    diaChiRap:'',
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_MANG_RAP':{
            state.mangRap = action.mangRap
        }
        case 'SET_CHI_TIET_RAP': {
            state.chiTietRap = action.chiTietRap;
            return { ...state };

        }
        case 'SET_INFO_RAP':{
            state.tenRap = action.ten;
            state.diaChiRap = action.diaChi;
            return { ...state };

        }
        default: return { ...state }
    }
}
