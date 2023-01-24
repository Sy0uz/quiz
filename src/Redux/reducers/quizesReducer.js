const initialState = {
    isLoading: true,
    quizList: null,
    offset: 0,
    totalPages: 0,
    error: null,
    limit: 5,
}

const FETCH_QUIZES = "FETCH_QUIZES";
const FETCH_QUIZES_SUCCES = "FETCH_QUIZES_SUCCES";
const FETCH_QUIZES_ERROR = "FETCH_QUIZES_ERROR";
const CHANGE_OFFSET = "CHANGE_OFFSET";

export const quizesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZES:
            return {...state, isLoading: true}
        case FETCH_QUIZES_SUCCES:
            return {...state, isLoading: false, quizList: action.payload.results, totalPages: Math.ceil(action.payload.count / state.limit)}
        case FETCH_QUIZES_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case CHANGE_OFFSET:
            return {...state, offset: action.payload}
        default:
            return state;
    }
}

export const FetchQuizesAC = () => ({type: FETCH_QUIZES});
export const FetchQuizesSuccesAC = (payload) => ({type: FETCH_QUIZES_SUCCES, payload})
export const FetchQuizesErrorAC = (payload) => ({type: FETCH_QUIZES_ERROR, payload})
export const ChangeOffsetAC = (payload) => ({type: CHANGE_OFFSET, payload})