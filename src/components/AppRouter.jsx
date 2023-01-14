import React, {useContext} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { routerPublic, routerPrivate } from '../router/router'

const AppRouter = () => {

    const {isAuth} = useContext(AppContext);

    return (
            isAuth
            ?
            <Routes>
                {routerPrivate.map(route => {
                    return <Route key={route.path} path={route.path} element={route.element}/>
                })}
                <Route path='/' element={<Navigate to="/quiz" replace/>}/>
                <Route path='/*' element={<Navigate to="/error" replace/>}/>
            </Routes>
            :
            <Routes>
                {routerPublic.map(route => {
                    return <Route key={route.path} path={route.path} element={route.element}/>
                })}
                <Route path='/' element={<Navigate to="/quiz" replace/>}/>
                <Route path='/*' element={<Navigate to="/error" replace/>}/>
            </Routes>

    )
}

export default AppRouter