import { useEffect, useState } from 'react';
import { PostService } from './API/PostService';
import AppRouter from './components/AppRouter';
import { AppContext } from './Context/AppContext';
import useFetching from './hooks/useFetching';
import './styles/App.css'
import MyNavbar from './UI/Navbar/MyNavbar';

function App() {
    const [store, setStore] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const fetchData = async () => {
        const response = await PostService.getQuizList();
        setStore(response.data)
    }

    const checkUserByToken = async () => {
        const [user, auth] = await PostService.checkUserAuth();
        setUser(user);
        setIsAuth(auth);
    }

    const [fetch, isLoading, error] = useFetching(fetchData);
    const [fetchUser, isLoadUser, userError] = useFetching(checkUserByToken);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUser();
        }
    }, [])

    return (
        <AppContext.Provider value={{
            store,
            fetch,
            isLoading,
            error,
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
