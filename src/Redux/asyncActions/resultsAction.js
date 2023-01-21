import { PostService } from "../../API/PostService"
import { SendResultsErrorAC, SendResultsSuccesAC } from "../reducers/quizResultReducer"

export const SendQuizAnswers = (formData) => {
    return async function (dispatch) {
        try {
            const response = await PostService.sendResults(formData)
            dispatch(SendResultsSuccesAC(response))
        } catch (error) {
            dispatch(SendResultsErrorAC(error.message))
        }
    }
}