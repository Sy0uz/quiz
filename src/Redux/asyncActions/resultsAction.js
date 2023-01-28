import { PostService } from "../../API/PostService"
import { SendResultsErrorAC, SendResultsSuccesAC } from "../reducers/quizResultReducer"

export const SendQuizAnswers = (formData, isAuth) => {
    return async function (dispatch) {
        try {
            const response = await PostService.sendResults(formData, isAuth)
            dispatch(SendResultsSuccesAC(response))
        } catch (error) {
            dispatch(SendResultsErrorAC(error.message))
        }
    }
}