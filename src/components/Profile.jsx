import React, {useEffect} from 'react'
import Wrapper from './Wrapper';
import { Spinner } from 'react-bootstrap';
import MyProfile from './MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAuthProfile } from '../Redux/asyncActions/myProfileAction';

const Profile = () => {
    const {user} = useSelector(state => state.main)
    const dispatch = useDispatch();
    const {isLoading, error} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(FetchAuthProfile(user.id))
    }, [])

    if (isLoading)
        return <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>

    return (
        <MyProfile user={user}/>
    )
}

export default Profile