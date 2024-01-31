import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
