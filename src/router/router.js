import Main from "../components/Main"
import Quiz from "../components/Quiz"
import Quizes from "../components/Quizes"
import QuizCreator from "../components/creator/QuizCreator"

export const routerPublic = [
    {path:'/', element:<Main/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/error', element:<div>Ошибка!</div>}
]

export const routerPrivate = [
    {path:'/', element:<Main/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/creator', element:<QuizCreator/>},
    {path:'/error', element:<div>Ошибка!</div>}
]