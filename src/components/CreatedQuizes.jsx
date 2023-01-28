import s from './../styles/CreatedQuizes.module.css'
import Wrapper from './Wrapper';
import { Button, Alert } from 'react-bootstrap';
import QuizHeader from './QuizHeader';
import { useNavigate } from 'react-router-dom';

const CreatedQuizes = ({createdQuizes, isMyProfile = false}) => {

    const redirect = useNavigate();

    return (
        <Wrapper>
            <div className={s.quizesHeader}>
                <h3>Созданные тесты</h3>
                {
                    isMyProfile
                    ? <Button variant='dark' onClick={() => redirect('/creator')}>Создать свой тест</Button>
                    : <></>
                }
            </div>
            {
                createdQuizes.length
                    ? <div className={s.gridQuizes}>
                        {createdQuizes.map(quiz => <QuizHeader deletable={isMyProfile} key={quiz.id} quiz={quiz} />)}
                    </div>
                    : <>
                        <Alert className='mt-2 mb-0' variant='dark'>Список созданных тестов пуст!</Alert>
                    </>
            }
        </Wrapper>
    )
}

export default CreatedQuizes;