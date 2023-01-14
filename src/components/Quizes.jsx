import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { PostService } from '../API/PostService';
import { AppContext } from '../Context/AppContext'
import useFetching from '../hooks/useFetching';
import usePagination from '../hooks/usePagination';
import MyPagination from '../UI/MyPagination/MyPagination';
import QuizHeader from './QuizHeader';
import Wrapper from './Wrapper';

const Quizes = () => {
    const limit = 5;
    const redirect = useNavigate();

    const {isAuth} = useContext(AppContext);

    const [store, setStore] = useState(null);

    const [offset, setOffset] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    let pagesArray = usePagination(totalPages);

    const fetchQuizes = async (limit, offset) => {
        const response = await PostService.getQuizList(limit, offset);
        setStore(response.results)
        setTotalPages(Math.ceil(response.count / limit))
    }

    const [fetch, isLoading] = useFetching(fetchQuizes);

    useEffect(() => {
        fetch(limit, offset);
    }, [offset])

    return (
        isLoading
            ? <Wrapper className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </Wrapper>
            : <Wrapper>
                {isAuth
                    ? <Button variant='dark' onClick={() => redirect('/creator')}>Создать свой тест</Button>
                    : <></>
                }
                {store
                    ? <div>
                        {store.map(quiz => <QuizHeader key={quiz.id} quiz={quiz} />)}
                        <MyPagination pages={pagesArray} limit={limit} offset={offset} setOffset={setOffset}/>
                    </div>
                    : <Alert className='mt-2 mb-0' variant='dark'>Список тестов пуст!</Alert>
                }
            </Wrapper>
    )
}

export default Quizes