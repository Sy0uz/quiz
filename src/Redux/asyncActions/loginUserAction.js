import { PostService } from "../../API/PostService"
import { LoginErrorAC, LoginSuccesAC, LoginUserAC } from "../reducers/loginReducer";

export const LoginUser = (formData) => {
    return async function (dispatch) {
        dispatch(LoginUserAC());
        try {
            const response = await PostService.loginUser(formData);
            dispatch(LoginSuccesAC());
        } catch (error) {
            dispatch(LoginErrorAC('Неверный логин или пароль.'))
        }
    }
}