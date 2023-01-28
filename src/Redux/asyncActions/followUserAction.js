import { PostService } from "../../API/PostService"
import { ChangeFollowAC, ChangeCommunityStatusAC } from "../reducers/userReducer"

export const SetUserFollow = (id, followed) => {
    return async function (dispatch) {
        dispatch(ChangeCommunityStatusAC())
        if (followed) {
            try {
                await PostService.unfollowUser(id)
                dispatch(ChangeFollowAC(false))
            } catch (error) {
                dispatch(ChangeFollowAC(true))
            }
        }
        else {
            try {
                await PostService.followUser(id)
                dispatch(ChangeFollowAC(true))
            } catch (error) {
                dispatch(ChangeFollowAC(false))
            }
        }
    }
}