import { PostService } from "../../API/PostService"
import { FileChangeVisibilityAC } from "../reducers/profileReducer";
import { CheckUserAuth } from "./checkAuthAction";

export const ChangeUserData = (formData, id) => {
    return async function (dispatch) {
        try {
            await PostService.changeUserData(formData, id);
            dispatch(CheckUserAuth());
            dispatch(FileChangeVisibilityAC(false));
        } 
        catch (error) {
            console.log(error);
        }
    }
}