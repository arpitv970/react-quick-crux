import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MapFilter from './components/MapFilter';

const App = () => {
    return (
        <div className='font-poppins'>
            <h1 className='text-[3rem] flex justify-center items-center mx-auto mt-5 w-[50%] text-center font-bold cursor-pointer border-2 rounded-xl border-primary hover:rounded-3xl transition-all duration-300'>
                <Link to='/'>ReactJS Quick Crux</Link>
            </h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/map-filter' element={<MapFilter />} />
            </Routes>
        </div>
    );
};

export default App;
