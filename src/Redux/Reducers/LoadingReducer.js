const stateDefault = {
    isLoading: false,
}

export const LoadingReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'SET_LOADING': {
            state.isLoading = action.isLoading;
            return { ...state }
        }
        default: return { ...state }
    }

}