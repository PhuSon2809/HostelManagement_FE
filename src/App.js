import logo from './logo.svg';
import './App.css';
import Home from './features/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <Routes>
      <Route path="/" exact element={<Home />} />

    </Routes>

  );
}

export default App;
