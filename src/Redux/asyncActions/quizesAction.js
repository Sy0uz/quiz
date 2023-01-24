import { PostService } from "../../API/PostService"
import { FetchQuizesAC, FetchQuizesErrorAC, FetchQuizesSuccesAC } from "../reducers/quizesReducer";

export const FetchQuizes = (limit, offset) => {
    return async function (dispatch) {
        dispatch(FetchQuizesAC())
        try {
            const response = await PostService.getQuizList(limit, offset);
            dispatch(FetchQuizesSuccesAC(response))
        } catch (error) {
            dispatch(FetchQuizesErrorAC(error.message))
        }
    }
}