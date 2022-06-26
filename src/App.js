import './App.scss';
import Home from './features/home';
import { Route, Routes } from 'react-router-dom';
import Hostel from './features/hostels';
import ListRoom from './features/listRoom';
import RoomDetail from './features/roomDetail';
import Profile from './features/profile';
import Booking from './features/booking';

function App() {
  return (

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/hostel" exact element={<Hostel />} />
      <Route path="/listRoom" exact element={<ListRoom />} />
      <Route path="/room" exact element={<RoomDetail />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/booking" exact element={<Booking />} />
    </Routes>

  );
}

export default App;
