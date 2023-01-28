import { combineReducers } from "redux";
import { currentQuizReducer } from "./currentQuizReducer";
import { mainReducer } from "./mainReducer";
import { profileReducer } from "./profileReducer";
import { quizesReducer } from "./quizesReducer";
import { quizResultReducer } from "./quizResultReducer";
import { loginReducer } from "./loginReducer";
import { registrationReducer } from "./registrationReducer"
import { quizCreatorReducer } from "./quizCreatorReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    quizes: quizesReducer,
    profile: profileReducer,
    main: mainReducer,
    quizresult: quizResultReducer,
    quiz: currentQuizReducer,
    login: loginReducer,
    registration: registrationReducer,
    quizCreator: quizCreatorReducer,
    user: userReducer,
})