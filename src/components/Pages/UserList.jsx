import React, { useEffect } from 'react'
import Wrapper from '../Wrapper'
import UserItem from '../Users/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUserList } from '../../Redux/asyncActions/userListAction';
import { ClearUserListPageAC } from '../../Redux/reducers/userListReducer';
import MySpinner from '../../UI/Spinner/MySpinner';
import MyAlert from '../../UI/Alert/MyAlert';

const UserList = () => {

    const dispatch = useDispatch();
    const {isLoading, error, userList} = useSelector(state => state.userList)

    useEffect(() => {
        dispatch(FetchUserList());

        return () => {
            dispatch(ClearUserListPageAC())
        }
    }, [])

    if (isLoading)
        return <MySpinner/>

    if (error) {
        return <Wrapper>
            <h2>{error}</h2>
        </Wrapper>
    }

    return (
        <Wrapper>
            {
                userList.length
                    ?
                    userList.map(user => <UserItem key={user.id} user={user} />)
                    :
                    <MyAlert>Список пользователей пуст!</MyAlert>
            }
        </Wrapper>
    )
}

export default UserList