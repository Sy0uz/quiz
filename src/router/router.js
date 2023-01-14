import Quiz from "../components/Quiz"
import Quizes from "../components/Quizes"
import QuizCreator from "../components/creator/QuizCreator"
import UserPage from "../components/Users/UserPage"
import UserList from "../components/Users/UserList"

export const routerPublic = [
    {path:'/users', element:<UserList/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/users/:id', element:<UserPage/>},
    {path:'/error', element:<div>Ошибка!</div>}
]

export const routerPrivate = [
    {path:'/users', element:<UserList/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/users/:id', element:<UserPage/>},
    {path:'/creator', element:<QuizCreator/>},
    {path:'/error', element:<div>Ошибка!</div>}
]