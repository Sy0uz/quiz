import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { profileReducer } from "./profileReducer";
import { quizesReducer } from "./quizesReducer";

export const rootReducer = combineReducers({
    quizes: quizesReducer,
    profile: profileReducer,
    main: mainReducer,
})