const initialState = {
    title: '',
    questions: [],
    image: null,
    error: null,
    isLoading: false,
    created: false,
    isInvalid: true,
}

const SET_TEST_TITLE = 'SET_TEST_TITLE';
const SET_TEST_IMAGE = 'SET_TEST_IMAGE';
const ADD_TEST_QUESTION = 'ADD_TEST_QUESTION';
const DELETE_TEST_QUESTION = 'DELETE_TEST_QUESTION';
const SAVE_TEST_QUESTION = 'SAVE_TEST_QUESTION';
const UNSAVE_TEST_QUESTION = 'UNSAVE_TEST_QUESTION';
const CREATE_TEST_SUCCES = 'CREATE_TEST_SUCCES';
const CREATE_TEST_ERROR = 'CREATE_TEST_ERROR';
const CREATE_TEST = 'CREATE_TEST';
const RESET_TEST = 'RESET_TEST';
const CHANGE_TEST_VALID = 'CHANGE_TEST_VALID';

export const quizCreatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST_TITLE:
            return {...state, title: action.payload}
        case SET_TEST_IMAGE:
            return {...state, image: action.payload}
        case ADD_TEST_QUESTION:
            return {...state, questions: [...state.questions, action.payload]}
        case DELETE_TEST_QUESTION:
            return {...state, questions: state.questions.filter(q => q.id !== action.payload)}
        case SAVE_TEST_QUESTION:
            return {...state, questions: state.questions.map(q => q.id === action.payload.id ? action.payload : q)}
        case UNSAVE_TEST_QUESTION:
            return {...state, questions: state.questions.map(q => q.id === action.payload ? {id:action.payload} : q)}
        case CREATE_TEST:
            return {...state, isLoading:true}
        case CREATE_TEST_SUCCES:
            return {...state, isLoading:false, created:true}
        case CREATE_TEST_ERROR:
            return {...state, isLoading:false, error:action.payload}
        case CHANGE_TEST_VALID:
            return {...state, isInvalid: action.payload}
        case RESET_TEST:
            return {title: '', questions: [], image: null, error: null, isLoading: false, created: false, isInvalid: true}
        default:
            return state;
    }
}

export const SetTestTitleAC = (payload) => ({type:SET_TEST_TITLE, payload})
export const SetTestImageAC = (payload) => ({type:SET_TEST_IMAGE, payload})
export const AddTestQuestionAC = (payload) => ({type:ADD_TEST_QUESTION, payload})
export const DeleteTestQuestionAC = (payload) => ({type:DELETE_TEST_QUESTION, payload})
export const SaveTestQuestionAC = (payload) => ({type:SAVE_TEST_QUESTION, payload})
export const UnsaveTestQuestionAC = (payload) => ({type:UNSAVE_TEST_QUESTION, payload})
export const CreateTestAC = () => ({type:CREATE_TEST})
export const CreateTestSuccesAC = () => ({type:CREATE_TEST_SUCCES});
export const CreateTestErrorAC = (payload) => ({type:CREATE_TEST_ERROR, payload});
export const ResetTestAC = () => ({type:RESET_TEST});
export const ChangeTestValidAC = (payload) => ({type:CHANGE_TEST_VALID, payload})