import { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Wrapper from './components/Wrapper';
import './styles/App.css'
import MyNavbar from './UI/Navbar/MyNavbar';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CheckUserAuth } from './Redux/asyncActions/checkAuthAction';

function App() {
    const {isLoading, error} = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CheckUserAuth())
    }, [])

    if (isLoading) {
        return <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>
    }

    return (
        <div className="App">
            <MyNavbar />
            <AppRouter />
        </div>
    );
}

export default App;
