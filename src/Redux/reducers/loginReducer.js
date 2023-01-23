const initialState = {
    isLoading: false,
    error: null,
    username: '',
    password: '',
    visible: false,
    succes: false,
    isDirty: true,
}

const LOGIN_USER = 'LOGIN_USER';
const LOGIN_SUCCES = 'LOGIN_SUCCES';
const LOGIN_ERROR = 'LOGIN_ERROR';
const SET_LOGIN_USERNAME = 'SET_LOGIN_USERNAME';
const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
const CHANGE_LOGIN_VISIBILITY = 'CHANGE_LOGIN_VISIBILITY';
const CHANGE_DIRTY_INPUT = 'CHANGE_DIRTY_INPUT';

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: 
            return {...state, isLoading: true}
        case LOGIN_SUCCES:
            return {...state, isLoading: false, username: '', password: '', succes: true, error:null}
        case LOGIN_ERROR:
            return {...state, isLoading: false, error: action.payload, password: '', isDirty: true}
        case SET_LOGIN_USERNAME:
            return {...state, username: action.payload}
        case SET_LOGIN_PASSWORD:
            return {...state, password: action.payload}
        case CHANGE_LOGIN_VISIBILITY:
            return {...state, visible: action.payload}
        case CHANGE_DIRTY_INPUT:
            return {...state, isDirty: action.payload}
        default:
            return state;
    }
}

export const LoginUserAC = () => ({type: LOGIN_USER})
export const LoginSuccesAC = () => ({type: LOGIN_SUCCES})
export const LoginErrorAC = (payload) => ({type: LOGIN_ERROR, payload})
export const SetLoginUsernameAC = (payload) => ({type: SET_LOGIN_USERNAME, payload})
export const SetLoginPasswordAC = (payload) => ({type: SET_LOGIN_PASSWORD, payload})
export const ChangeLoginVisibilityAC = (payload) => ({type: CHANGE_LOGIN_VISIBILITY, payload})
export const ChangeDirtyInputAC = (payload) => ({type: CHANGE_DIRTY_INPUT, payload})