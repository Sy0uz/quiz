import { PostService } from "../../API/PostService"
import { FetchUserErrorAC, FetchUserSuccesAC } from "../reducers/userReducer";

export const FetchUser = (id) => {
    return async function (dispatch) {
        try {
            const response = await PostService.getUser(id);
            dispatch(FetchUserSuccesAC(response))
        } catch (error) {
            dispatch(FetchUserErrorAC(error.data))
        }
    }
}