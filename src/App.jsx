import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MapFilter from './components/MapFilter';
import State from './components/State';

const App = () => {
    return (
        <div className='font-poppins'>
            <Link to='/'>
                <h1 className='text-[3rem] flex justify-center items-center mx-auto mt-5 w-[50%] text-center font-bold cursor-pointer border-2 rounded-xl border-primary hover:rounded-3xl transition-all duration-300'>
                    ReactJS Quick Crux
                </h1>
            </Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/map-filter' element={<MapFilter />} />
                <Route path='/state' element={<State />} />
            </Routes>
        </div>
    );
};

export default App;
