import { useEffect, useState } from 'react';
import { PostService } from './API/PostService';
import AppRouter from './components/AppRouter';
import Wrapper from './components/Wrapper';
import { AppContext } from './Context/AppContext';
import useFetching from './hooks/useFetching';
import './styles/App.css'
import MyNavbar from './UI/Navbar/MyNavbar';
import { Spinner } from 'react-bootstrap';

function App() {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const checkUserByToken = async () => {
        const [user, auth] = await PostService.checkUserAuth();
        setUser(user);
        setIsAuth(auth);
    }

    const [fetchUser, isLoadUser] = useFetching(checkUserByToken);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUser();
        }
    }, [])

    if (isLoadUser) {
        return <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>
    }

    return (
        <AppContext.Provider value={{
            isAuth,
            setIsAuth,
            user,
        }}>
            <div className="App">
                <MyNavbar />
                <AppRouter />
            </div>
        </AppContext.Provider>
    );
}

export default App;
