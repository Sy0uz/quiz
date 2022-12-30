import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { router } from '../router/router'

const AppRouter = () => {
    return (
        <Routes>
            {router.map(route => {
                return <Route key={route.path} path={route.path} element={route.element}/>
            })}
            <Route path='/*' element={<Navigate to="/error" replace/>}/>
        </Routes>
    )
}

export default AppRouter