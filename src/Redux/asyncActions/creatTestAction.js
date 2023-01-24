import { PostService } from "../../API/PostService"
import { CreateTestAC, CreateTestErrorAC, CreateTestSuccesAC } from "../reducers/quizCreatorReducer";

export const CreateTest = (test) => {
    return async function(dispatch) {
        dispatch(CreateTestAC());
        try {
            const response = await PostService.addPost(test);
            dispatch(CreateTestSuccesAC());
        } catch (error) {
            dispatch(CreateTestErrorAC(error.response.data))
        }
    }
}