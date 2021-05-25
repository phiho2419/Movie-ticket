const stateDefault = {
    chiTietRap: [

    ],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_CHI_TIET_RAP': {
            state.chiTietRap = action.chiTietRap;
            return { ...state };

        }
        default: return { ...state }
    }
}
