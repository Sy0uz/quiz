import { PostService } from "../../API/PostService"
import { FetchQuizErrorAC, FetchQuizSuccesAC } from "../reducers/currentQuizReducer";

export const FetchQuiz = (id) => {
    return async function (dispatch) {
        try {
            const response = await PostService.getQuiz(id);
            dispatch(FetchQuizSuccesAC(response));
        } catch (error) {
            dispatch(FetchQuizErrorAC(error.message));
        }
    }
}