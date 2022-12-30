import Main from "../components/Main"
import Quiz from "../components/Quiz"
import Quizes from "../components/Quizes"

export const router = [
    {path:'/', element:<Main/>},
    {path:'/quiz', element:<Quizes/>},
    {path:'/quiz/:id', element:<Quiz/>},
    {path:'/error', element:<div>Ошибка!</div>}
]