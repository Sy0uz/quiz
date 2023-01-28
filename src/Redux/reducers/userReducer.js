const initialState = {
    isLoading: true,
    error: null,
    user: null,
    isFollowLoading: false,
    followed: false,
    isFriends: false,
    isMyProfile: false,
}

const FETCH_USER_SUCCES = 'FETCH_USER_SUCCES';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const CLEAR_USER_PAGE = 'CLEAR_USER_PAGE';
const CHANGE_FRIENDS_STATUS = 'CHANGE_FRIENDS_STATUS';
const CHANGE_COMMUNITY_STATUS = 'CHANGE_COMMUNITY_STATUS';
const SET_IS_MY_PROFILE = 'SET_IS_MY_PROFILE';

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCES:
            return {...state, isLoading: false, user: action.payload}
        case FETCH_USER_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case CHANGE_COMMUNITY_STATUS:
            return {...state, isFollowLoading: true}
        case CHANGE_FOLLOW:
            return {...state, followed: action.payload, isFollowLoading: false}
        case CHANGE_FRIENDS_STATUS:
            return {...state, isFriends: action.payload, isFollowLoading: false}
        case CLEAR_USER_PAGE:
            return {isLoading: true, error: null, user: null, authUser:null, isFollowLoading: false, authError: null, followed: false, isFriends: false, isMyProfile:false}
        case SET_IS_MY_PROFILE:
            return {...state, isMyProfile: action.payload}
        default:
            return state;
    }
}

export const FetchUserSuccesAC = (payload) => ({type:FETCH_USER_SUCCES, payload})
export const FetchUserErrorAC = (payload) => ({type:FETCH_USER_ERROR, payload})
export const ChangeFollowAC = (payload) => ({type:CHANGE_FOLLOW, payload})
export const ChangeFriendsStatusAC = (payload) => ({type:CHANGE_FRIENDS_STATUS, payload})
export const ChangeCommunityStatusAC = () => ({type:CHANGE_COMMUNITY_STATUS})
export const SetIsMyProfileAC = (payload) => ({type:SET_IS_MY_PROFILE, payload})
export const ClearUserPageAC = () => ({type:CLEAR_USER_PAGE})