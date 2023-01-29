import { PostService } from "../../API/PostService"
import { FetchUserListErrorAC, FetchUserListSuccesAC } from "../reducers/userListReducer";

export const FetchUserList = () => {
    return async function (dispatch) {
        try {
            const response = await PostService.getUserList();
            dispatch(FetchUserListSuccesAC(response))
        } catch (error) {
            dispatch(FetchUserListErrorAC(error.data));
        }
    }
}