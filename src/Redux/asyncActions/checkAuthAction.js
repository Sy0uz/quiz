import { PostService } from "../../API/PostService"
import { CheckAuthErrorAC, CheckAuthSuccesAC } from "../reducers/mainReducer"

export const CheckUserAuth = () => {
    return async function (dispatch) {
        try {
            const [user, auth] = await PostService.checkUserAuth()
            const response = await PostService.getUser(user.id);
            dispatch(CheckAuthSuccesAC({user: user, auth: auth, userExtended: response}))
        } catch (error) {
            dispatch(CheckAuthErrorAC(error.message))
        }
    }
}