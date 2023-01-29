import React, {useEffect} from 'react'
import MyProfile from '../MyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAuthProfile } from '../../Redux/asyncActions/myProfileAction';
import { ClearProfileAC, ChangeFileAC, FileChangeVisibilityAC } from '../../Redux/reducers/profileReducer';
import { ChangeUserData } from '../../Redux/asyncActions/changeUserDataAction';
import MySpinner from '../../UI/Spinner/MySpinner';
import Wrapper from '../Wrapper';

const Profile = () => {
    const {authUser} = useSelector(state => state.main)
    const dispatch = useDispatch();
    const {isLoading, error, userExtended, modalVisible, file} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(FetchAuthProfile(authUser.id))

        return () => {
            dispatch(ClearProfileAC())
        }
    }, [authUser])

    const fileOnChange = (e) => {
        dispatch(ChangeFileAC(e.target.files[0]));
    }

    const setVisible = (bool) => {
        dispatch(FileChangeVisibilityAC(bool))
    }

    const onFileApply = async () => {
        const formData = new FormData();
        formData.append('user_img_url', file);

        dispatch(ChangeUserData(formData, authUser.id));
    }

    if (isLoading)
        return <MySpinner/>
    
    if (error)
        return <Wrapper>
            <h2>{error}</h2>
        </Wrapper>

    return (
        <MyProfile user={authUser} userExtended={userExtended} modalVisible={modalVisible} fileOnChange={fileOnChange} setVisible={setVisible} onFileApply={onFileApply}/>
    )
}

export default Profile