import { PostService } from "../../API/PostService"
import { RegistrationErrorAC, RegistrationSuccesAC, RegistrationUserAC } from "../reducers/registrationReducer";

export const RegisterUser = (formData) => {
    return async function (dispatch) {
        dispatch(RegistrationUserAC());
        try {
            const response = await PostService.registerUser(formData);
            dispatch(RegistrationSuccesAC());
        } catch (error) {
            dispatch(RegistrationErrorAC(error.response.data))
        }
    }
}