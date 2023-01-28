const initialState = {
    isLoading: true,
    error: null,
    isAuth: false,
    authUser: null,
    authUserExtended: null,
}

const CHECK_AUTH_SUCCES = 'CHECK_AUTH_SUCCES';
const CHECK_AUTH_ERROR = 'CHECK_AUTH_ERROR';
const EXIT = 'EXIT';

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH_SUCCES:
            return {...state, isLoading: false, isAuth: action.payload.auth, authUser: action.payload.user, authUserExtended: action.payload.userExtended}
        case CHECK_AUTH_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case EXIT:
            return {isLoading: false, isAuth: false, user: null, error: null}
        default:
            return state;
    }

}

export const CheckAuthSuccesAC = (payload) => ({type: CHECK_AUTH_SUCCES, payload})
export const CheckAuthErrorAC = (payload) => ({type: CHECK_AUTH_ERROR, payload})
export const ExitAC = () => ({type: EXIT})