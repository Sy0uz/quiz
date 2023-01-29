import s from './../styles/CreatedQuizes.module.css'
import Wrapper from './Wrapper';
import { Button } from 'react-bootstrap';
import QuizHeader from './QuizHeader';
import { useNavigate } from 'react-router-dom';
import MyAlert from '../UI/Alert/MyAlert';

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
                    : <MyAlert>Список созданных тестов пуст!</MyAlert>
            }
        </Wrapper>
    )
}

export default CreatedQuizes;