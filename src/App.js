import { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import { AppContext } from './Context/AppContext';
import { Store } from './Store/Store';
import './styles/App.css'
import MyNavbar from './UI/MyNavbar';

function App() {
    
    const [store, setStore] = useState(null);

    useEffect(() => {
        setStore(Store)
    }, [])

    return (
        <AppContext.Provider value={{
            store: store,
        }}>
            <div className="App">
                <MyNavbar />
                <AppRouter />
            </div>
        </AppContext.Provider>
    );
}

export default App;
