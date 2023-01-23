const initialState = {
    isLoading: true,
    error:null,
    userExtended: null,
    modalVisible: false,
    file: null,
}

const FETCH_PROFILE_SUCCES = 'FETCH_PROFILE_SUCCES';
const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';
const FILE_CHANGE_VISIBILITY = 'FILE_CHANGE_VISIBILITY';
const CHANGE_FILE = 'CHANGE_FILE';

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE_SUCCES:
            return {...state, isLoading: false, userExtended: action.payload}
        case FETCH_PROFILE_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case FILE_CHANGE_VISIBILITY:
            return {...state, modalVisible: action.payload}
        case CHANGE_FILE:
            return {...state, file: action.payload}
        default:
            return state;
    }
}

export const FetchProfileSuccesAC = (payload) => ({type:FETCH_PROFILE_SUCCES, payload})
export const FetchProfileErrorAC = (payload) => ({type:FETCH_PROFILE_ERROR, payload})
export const FileChangeVisibilityAC = (payload) => ({type:FILE_CHANGE_VISIBILITY, payload})
export const ChangeFileAC = (payload) => ({type:CHANGE_FILE, payload})