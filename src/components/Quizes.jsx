import React, { useEffect } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import usePagination from '../hooks/usePagination';
import { FetchQuizes } from '../Redux/asyncActions/quizesAction';
import { ChangeOffsetAC } from '../Redux/reducers/quizesReducer';
import MyPagination from '../UI/MyPagination/MyPagination';
import QuizHeader from './QuizHeader';
import Wrapper from './Wrapper';

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
        return <Wrapper className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </Wrapper>

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
                        : <Alert className='mt-2 mb-0' variant='dark'>Список тестов пуст!</Alert>
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