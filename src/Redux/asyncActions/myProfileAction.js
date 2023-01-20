import { PostService } from "../../API/PostService"
import { FetchProfileSuccesAC, FetchProfileErrorAC } from "../reducers/profileReducer"

export const FetchAuthProfile = (id) => {
    return async function (dispatch) {
        try {
            const response = await PostService.getUser(id)
            dispatch(FetchProfileSuccesAC(response))
        } catch (error) {
            dispatch(FetchProfileErrorAC(error.message))
        }
    }
}