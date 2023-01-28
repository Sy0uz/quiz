import React, {useEffect} from 'react'
import Wrapper from './Wrapper';
import { Spinner } from 'react-bootstrap';
import MyProfile from './MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAuthProfile } from '../Redux/asyncActions/myProfileAction';
import { ClearProfileAC, ChangeFileAC, FileChangeVisibilityAC } from '../Redux/reducers/profileReducer';
import { PostService } from '../API/PostService';

const Profile = () => {
    const {authUser} = useSelector(state => state.main)
    const dispatch = useDispatch();
    const {isLoading, error, userExtended, modalVisible, file} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(FetchAuthProfile(authUser.id))

        return () => {
            dispatch(ClearProfileAC())
        }
    }, [])

    const fileOnChange = (e) => {
        dispatch(ChangeFileAC(e.target.files[0]));
    }

    const setVisible = (bool) => {
        dispatch(FileChangeVisibilityAC(bool))
    }

    const onApply = async () => {
        const formData = new FormData();
        formData.append('user_img_url', file);

        const response = await PostService.changeUserData(formData, authUser.id);
        if (response.status === 200) {
            dispatch(FetchAuthProfile(authUser.id))
            dispatch(FileChangeVisibilityAC(false))
        }    
    }

    if (isLoading)
        return <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>

    return (
        <MyProfile user={authUser} userExtended={userExtended} modalVisible={modalVisible} fileOnChange={fileOnChange} setVisible={setVisible} onApply={onApply}/>
    )
}

export default Profile