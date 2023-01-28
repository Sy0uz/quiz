import React from 'react'
import UserItem from './Users/UserItem'
import s from './../styles/UserCommunity.module.css'
import { Alert, Container } from 'react-bootstrap'

const UserCommunity = ({friends, following, followers, isMyProfile = false}) => {
    return (
        <Container className={s.wrapper}>
            <div>
                <h4>Друзья</h4>
                {
                    friends.length
                    ?
                    friends.map(item => <UserItem key={item.id} user={item} />)
                    :
                    <Alert className='mt-2 mb-0' variant='dark'>Список друзей пуст!</Alert>
                }
            </div>

            <div>
                <h4>Отслеживает</h4>
                {
                    following.length
                    ?
                    following.map(item => <UserItem key={item.id} user={item} />)
                    :
                    <Alert className='mt-2 mb-0' variant='dark'>Список отслеживаемых пуст!</Alert>
                }
            </div>

            <div>
                <h4>Фолловеры</h4>
                {
                    followers.length
                    ?
                    followers.map(item => <UserItem key={item.id} user={item} />)
                    :
                    <Alert className='mt-2 mb-0' variant='dark'>Список фолловеров пуст!</Alert>
                }
            </div>
        </Container>
    )
}

export default UserCommunity