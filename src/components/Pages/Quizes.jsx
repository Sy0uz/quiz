import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import usePagination from '../../hooks/usePagination';
import { FetchQuizes } from '../../Redux/asyncActions/quizesAction';
import { ChangeOffsetAC } from '../../Redux/reducers/quizesReducer';
import MyAlert from '../../UI/Alert/MyAlert';
import MyPagination from '../../UI/MyPagination/MyPagination';
import MySpinner from '../../UI/Spinner/MySpinner';
import QuizHeader from '../QuizHeader';
import Wrapper from '../Wrapper';

const Quizes = () => {

    const redirect = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, quizList, offset, totalPages, error, limit} = useSelector(state => state.quizes);
    const {isAuth} = useSelector(state => state.main)

    const pagesArray = usePagination(totalPages);
    
    useEffect(() => {
        dispatch(FetchQuizes(limit, offset))
    }, [offset])

    const setOffset = (value) => {
        dispatch(ChangeOffsetAC(value))
    }

    if (isLoading)
        return <MySpinner/>

    if (error)
        return <Wrapper className='d-flex justify-content-center'>
            <h2>{error}</h2>
        </Wrapper>

    return (
        <>
            <Wrapper>
                {
                    isAuth
                        ? <Button variant='dark' onClick={() => redirect('/creator')}>Создать свой тест</Button>
                        : <></>
                }
                {
                    quizList
                        ? quizList.map(quiz => <QuizHeader key={quiz.id} quiz={quiz} />)
                        : <MyAlert>Список тестов пуст!</MyAlert>
                }
            </Wrapper>
            {
                quizList
                    ? <MyPagination pages={pagesArray} limit={limit} offset={offset} setOffset={setOffset} />
                    : <></>
            }
        </>
    )
}

export default Quizes