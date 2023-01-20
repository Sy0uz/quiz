import { PostService } from "../../API/PostService"
import { CheckAuthErrorAC, CheckAuthSuccesAC } from "../reducers/mainReducer"

export const CheckUserAuth = () => {
    return async function (dispatch) {
        try {
            const [user, auth] = await PostService.checkUserAuth()
            dispatch(CheckAuthSuccesAC({user: user, auth: auth}))
        } catch (error) {
            dispatch(CheckAuthErrorAC(error.message))
        }
    }
}