const initialState = {
    isLoading: false,
    error: null,
    email: '',
    username: '',
    password: '',
    visible: false,
    succes: false,
    isDirty: true,
}

const REGISTRATION_USER = 'REGISTRATION_USER';
const REGISTRATION_SUCCES = 'REGISTRATION_SUCCES';
const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
const SET_REGISTRATION_EMAIL = 'SET_REGISTRATION_EMAIL';
const SET_REGISTRATION_USERNAME = 'SET_REGISTRATION_USERNAME';
const SET_REGISTRATION_PASSWORD = 'SET_REGISTRATION_PASSWORD';
const CHANGE_REGISTRATION_VISIBILITY = 'CHANGE_REGISTRATION_VISIBILITY';
const CHANGE_DIRTY_REGISTRATION_INPUT = 'CHANGE_DIRTY_REGISTRATION_INPUT';
const CLEAR_REGISTRATION_INPUTS = 'CLEAR_REGISTRATION_INPUTS';

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_USER: 
            return {...state, isLoading: true}
        case REGISTRATION_SUCCES:
            return {...state, isLoading: false, succes: true, error:null}
        case REGISTRATION_ERROR:
            return {...state, isLoading: false, error: action.payload, password: '', isDirty: true}
        case SET_REGISTRATION_EMAIL:
            return {...state, email: action.payload}
        case SET_REGISTRATION_USERNAME:
            return {...state, username: action.payload}
        case SET_REGISTRATION_PASSWORD:
            return {...state, password: action.payload}
        case CHANGE_REGISTRATION_VISIBILITY:
            return {...state, visible: action.payload}
        case CHANGE_DIRTY_REGISTRATION_INPUT:
            return {...state, isDirty: action.payload}
        case CLEAR_REGISTRATION_INPUTS:
            return {...state, email:'', username:'', password:''};
        default:
            return state;
    }
}

export const RegistrationUserAC = () => ({type: REGISTRATION_USER})
export const RegistrationSuccesAC = () => ({type: REGISTRATION_SUCCES})
export const RegistrationErrorAC = (payload) => ({type: REGISTRATION_ERROR, payload})
export const SetRegistrationEmailAC = (payload) => ({type: SET_REGISTRATION_EMAIL, payload})
export const SetRegistrationUsernameAC = (payload) => ({type: SET_REGISTRATION_USERNAME, payload})
export const SetRegistrationPasswordAC = (payload) => ({type: SET_REGISTRATION_PASSWORD, payload})
export const ChangeRegistrationVisibilityAC = (payload) => ({type: CHANGE_REGISTRATION_VISIBILITY, payload})
export const ChangeDirtyRegistrationInputAC = (payload) => ({type: CHANGE_DIRTY_REGISTRATION_INPUT, payload})
export const ClearRegistrationInputsAC = () => ({type:CLEAR_REGISTRATION_INPUTS});