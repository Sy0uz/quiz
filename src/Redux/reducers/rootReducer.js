import { combineReducers } from "redux";
import { currentQuizReducer } from "./currentQuizReducer";
import { mainReducer } from "./mainReducer";
import { profileReducer } from "./profileReducer";
import { quizesReducer } from "./quizesReducer";
import { quizResultReducer } from "./quizResultReducer";

export const rootReducer = combineReducers({
    quizes: quizesReducer,
    profile: profileReducer,
    main: mainReducer,
    quizresult: quizResultReducer,
    quiz: currentQuizReducer,
})