const stateDefault = {
    mangNguoiDung: [],
}

export const AdminReducer = (state = stateDefault, action) => {

    switch (action.type){
        case 'SET_MANG_NGUOI_DUNG': {
            state.mangNguoiDung = action.mangNguoiDung;
            return {...state}
        }
        default: return{...state}
    }

}