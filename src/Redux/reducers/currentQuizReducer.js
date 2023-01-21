const initialState = {
    isLoading: true,
    error: null,
    quiz: null,
    qIndex: 0,
    isFinal: false,
    answers: []
}

const FETCH_QUIZ_SUCCES = 'FETCH_QUIZ_SUCCES';
const FETCH_QUIZ_ERROR = 'FETCH_QUIZ_ERROR';
const NEXT_QUESTION = 'NEXT_QUESTION';
const GIVE_RESULTS = 'GIVE_RESULTS'
const RESET_QUIZ = 'RESET_QUIZ'
 
export const currentQuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZ_SUCCES:
            return {...state, isLoading: false, quiz: action.payload}
        case FETCH_QUIZ_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case NEXT_QUESTION:
            return {...state, qIndex: state.qIndex + 1, answers: [...state.answers, action.payload]}
        case GIVE_RESULTS:
            return {...state, isFinal: true};
        case RESET_QUIZ:
            return {isLoading: true, error: null, quiz: null, qIndex: 0, isFinal: false, answers: []}
        default:
            return state;
    }
}

export const FetchQuizSuccesAC = (payload) => ({type:FETCH_QUIZ_SUCCES, payload})
export const FetchQuizErrorAC = (payload) => ({type:FETCH_QUIZ_ERROR, payload})
export const NextQuestionAC = (payload) => ({type:NEXT_QUESTION, payload})
export const GiveResultsAC = () => ({type:GIVE_RESULTS})
export const ResetQuizAC = () => ({type:RESET_QUIZ})