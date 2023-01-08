import Main from "../components/Main"
import Quiz from "../components/Quiz"
import Quizes from "../components/Quizes"
import QuizCreator from "../components/creator/QuizCreator"

export const router = [
    {path:'/', element:<Main/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/quiz/creator',element:<QuizCreator/>},
    {path:'/error', element:<div>Ошибка!</div>}
]