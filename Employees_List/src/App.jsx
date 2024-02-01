import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import CreateUser from './pages/create/CreateUser';


import './index.css';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/create" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
