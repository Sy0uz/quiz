import React, {useEffect, useState} from 'react'
import { PostService } from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import Wrapper from '../Wrapper'
import { Spinner, Alert } from 'react-bootstrap';
import UserItem from './UserItem';

const UserList = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsers = async () => {
        const response = await PostService.getUserList();
        setUserList(response.results);
    }

    const [fetch, isLoading] = useFetching(fetchUsers);

    useEffect(() => {
        fetch();
    }, [])

    return (
        isLoading
            ?
            <Wrapper className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </Wrapper>
            :
            <Wrapper>
                {
                    userList.length
                        ?
                        userList.map(user => <UserItem key={user.id} user={user}/>)
                        :
                        <Alert className='mt-2 mb-0' variant='dark'>Список пользователей пуст!</Alert>
                }
            </Wrapper>
    )
}

export default UserList