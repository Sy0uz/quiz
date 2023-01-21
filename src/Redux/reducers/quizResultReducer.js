const initialState = {
    isLoading: true,
    error: null,
    results: null,
}

const SEND_RESULTS_SUCCES = 'SEND_RESULTS_SUCCES';
const SEND_RESULTS_ERROR = 'SEND_RESULTS_ERROR';
 
export const quizResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_RESULTS_SUCCES:
            return {...state, isLoading: false, results: action.payload}
        case SEND_RESULTS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}

export const SendResultsSuccesAC = (payload) => ({type: SEND_RESULTS_SUCCES, payload})
export const SendResultsErrorAC = (payload) => ({type: SEND_RESULTS_ERROR, payload})