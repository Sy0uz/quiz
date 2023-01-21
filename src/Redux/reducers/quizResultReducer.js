const initialState = {
    isLoading: true,
    error: null,
    results: null,
}

const SEND_RESULTS_SUCCES = 'SEND_RESULTS_SUCCES';
const SEND_RESULTS_ERROR = 'SEND_RESULTS_ERROR';
const CLEAR_RESULTS = 'CLEAR_RESULTS'
 
export const quizResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_RESULTS_SUCCES:
            return {...state, isLoading: false, results: action.payload}
        case SEND_RESULTS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case CLEAR_RESULTS:
            return {isLoading: true, error: null, results: null}
        default:
            return state;
    }
}

export const SendResultsSuccesAC = (payload) => ({type: SEND_RESULTS_SUCCES, payload})
export const SendResultsErrorAC = (payload) => ({type: SEND_RESULTS_ERROR, payload})
export const ClearResultsAC = () => ({type:CLEAR_RESULTS})