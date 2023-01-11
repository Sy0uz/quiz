import axios from 'axios';
import { useEffect, useState } from 'react';
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
        const response = await axios.get('http://localhost:8000/api/quiz')
        setStore(response.data)
    }

    const fetchByToken = async (token) => {
        const response = await axios.get('http://localhost:8000/api/auth/users', {
            headers: {
                token: token
            }
        })
        if (!Object.keys(response.data).includes('details')) {
            setUser(response.data.results[0]);
            setIsAuth(true);
        }
    }

    const [fetch, isLoading, error] = useFetching(fetchData);
    const [fetchUser, isLoadUser, userError] = useFetching(fetchByToken);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUser(localStorage.getItem('token'))
            console.log(user);
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
        }}>
            <div className="App">
                <MyNavbar />
                <AppRouter />
            </div>
        </AppContext.Provider>
    );
}

export default App;
