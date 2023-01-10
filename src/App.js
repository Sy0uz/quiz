import { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import { AppContext } from './Context/AppContext';
import { Store } from './Store/Store';
import './styles/App.css'
import MyNavbar from './UI/Navbar/MyNavbar';

function App() {
    
    const [store, setStore] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    window.store = store;

    useEffect(() => {
        setStore(Store)
    }, [])
    

    return (
        <AppContext.Provider value={{
            store,
            setStore,
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
