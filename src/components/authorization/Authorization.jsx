import React from 'react'
import Login from './Login'
import Registration from './Registration'

const Authorization = ({type, show, setShow}) => {
    if (type === 'login')
        return <Login show={show} setShow={setShow}/>
    else if (type === 'registration')
        return <Registration show={show} setShow={setShow}/>
    else
        return <div></div>
}

export default Authorization