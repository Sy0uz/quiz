import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routerPublic, routerPrivate } from '../router/router'

const AppRouter = () => {

    const {isAuth} = useSelector(state => state.main)

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