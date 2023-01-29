import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Wrapper from '../Wrapper';
import UserProfile from '../Users/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUser } from '../../Redux/asyncActions/fetchUserAction';
import { ChangeFollowAC, ChangeFriendsStatusAC, ClearUserPageAC, SetIsMyProfileAC } from '../../Redux/reducers/userReducer';
import { SetUserFollow } from '../../Redux/asyncActions/followUserAction';
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction';
import MySpinner from '../../UI/Spinner/MySpinner';

const UserPage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const {user, isLoading, isFollowLoading, error, followed, isFriends, isMyProfile} = useSelector(state => state.user)
    const {authUserExtended, isAuth} = useSelector(state => state.main)

    useEffect(() => {
        dispatch(FetchUser(params.id))
        dispatch(CheckUserAuth());
    
        return () => {
            dispatch(ClearUserPageAC());
        }
    }, [params.id])

    useEffect(() => {
        if (authUserExtended) {
            if (user?.profile.id === authUserExtended.profile.id) {
                dispatch(SetIsMyProfileAC(true))
            }
            for (const item of authUserExtended.following) {
                if (user?.profile.id === item.id)
                    dispatch(ChangeFollowAC(true))
            }
            for (const item of authUserExtended.friends) {
                if (user?.profile.id === item.id)
                    dispatch(ChangeFriendsStatusAC(true))
            }
        }
    }, [authUserExtended])

    const changeFollow = (id, followed, isFriends) => {
        if (isFriends) {
            dispatch(SetUserFollow(id, isFriends))
            dispatch(ChangeFriendsStatusAC(false))
        }
        else
            dispatch(SetUserFollow(id, followed))
    }

    if (isLoading)
        return <MySpinner/>
    
    if (error)
        return <Wrapper>
            <h2>Пользователя с id {params.id} не существует!</h2>
        </Wrapper>

    return <UserProfile user={user} followed={followed} isFriends={isFriends} changeFollow={changeFollow} isFollowLoading={isFollowLoading} isMyProfile={isMyProfile} isAuth={isAuth}/>;
}

export default UserPage