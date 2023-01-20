import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PostService } from '../../API/PostService'
import useFetching from '../../hooks/useFetching';
import Wrapper from '../Wrapper';
import { Spinner } from 'react-bootstrap';
import UserProfile from './UserProfile';

const UserPage = () => {

    const params = useParams();

    const [user, setUser] = useState(null);
    
    const fetchUser = async (id) => {
        const response = await PostService.getUser(id);
        setUser(response);
    }

    const [fetch, isLoading] = useFetching(fetchUser);

    useEffect(() => {
        fetch(params.id)
    }, [])

    return (
        isLoading
            ?
            <Wrapper className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </Wrapper>
            :
                !user
                ?
                <Wrapper>
                    <h2>Пользователя с id {params.id} не существует!</h2>
                </Wrapper>
                :
                <UserProfile user={user}/>
    )
}

export default UserPage