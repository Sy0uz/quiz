import Quiz from "../components/Pages/Quiz"
import Quizes from "../components/Pages/Quizes"
import QuizCreator from "../components/Pages/QuizCreator"
import UserPage from "../components/Pages/UserPage"
import UserList from "../components/Pages/UserList"
import Profile from "../components/Pages/Profile"
import ErrorPage from "../components/Pages/ErrorPage"

export const routerPublic = [
    {path:'/users', element: <UserList/>},
    {path:'/quiz', element: <Quizes/>},
    {path:'/quiz/:id', element: <Quiz/>},
    {path:'/users/:id', element: <UserPage/>},
    {path:'/error', element: <ErrorPage/>}
]

export const routerPrivate = [
    {path:'/users', element: <UserList/>},
    {path:'/quiz', element: <Quizes/>},
    {path:'/quiz/:id', element: <Quiz/>},
    {path:'/users/:id', element: <UserPage/>},
    {path:'/creator', element: <QuizCreator/>},
    {path:'/profile', element: <Profile/>},
    {path:'/error', element: <ErrorPage/>}
]