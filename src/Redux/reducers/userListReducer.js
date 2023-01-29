const initialState = {
    isLoading: true,
    error:null,
    userList: null,
}

const FETCH_USERLIST_SUCCES = 'FETCH_USERLIST_SUCCES';
const FETCH_USERLIST_ERROR = 'FETCH_USERLIST_ERROR';
const CLEAR_USERLIST_PAGE = 'CLEAR_USERLIST_PAGE';

export const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERLIST_SUCCES:
            return {...state, isLoading: false, userList: action.payload};
        case FETCH_USERLIST_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case CLEAR_USERLIST_PAGE:
            return {isLoading: true, error: null, userList: null};
        default:
            return state;
    }
}

export const FetchUserListSuccesAC = (payload) => ({type: FETCH_USERLIST_SUCCES, payload});
export const FetchUserListErrorAC = (payload) => ({type: FETCH_USERLIST_ERROR, payload});
export const ClearUserListPageAC = () => ({type:CLEAR_USERLIST_PAGE});
