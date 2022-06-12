import './App.scss';
import Home from './features/home';
import { Route, Routes } from 'react-router-dom';
import Hostel from './features/hostels';
import ListRoom from './features/listRoom';
import RoomDetail from './features/roomDetail';

function App() {
  return (
  
    <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/hostel" exact element={<Hostel />} />
      <Route path="/listRoom" exact element={<ListRoom />} />
      <Route path="/room" exact element={<RoomDetail />} />
    </Routes>

  );
}

export default App;
