import React from 'react'
import UserItem from './Users/UserItem'
import s from './../styles/UserCommunity.module.css'
import { Container } from 'react-bootstrap'
import MyAlert from '../UI/Alert/MyAlert'

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
                    <MyAlert>Список друзей пуст!</MyAlert>
                }
            </div>

            <div>
                <h4>Отслеживает</h4>
                {
                    following.length
                    ?
                    following.map(item => <UserItem key={item.id} user={item} />)
                    :
                    <MyAlert>Список отслеживаемых пуст!</MyAlert>
                }
            </div>

            <div>
                <h4>Фолловеры</h4>
                {
                    followers.length
                    ?
                    followers.map(item => <UserItem key={item.id} user={item} />)
                    :
                    <MyAlert>Список фолловеров пуст!</MyAlert>
                }
            </div>
        </Container>
    )
}

export default UserCommunity