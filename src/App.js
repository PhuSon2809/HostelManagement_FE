import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Authenticated from "./features/authenticated";
import Booking from "./features/booking";
import Home from "./features/home/Home";
import Hostel from "./features/hostels/Hostels";
import ListRoom from "./features/listRoom/ListRoom";
import Owner from "./features/owner2/index";
import Profile from "./features/profile/Profile";
import RoomDetail from "./features/roomDetail/RoomDetail";
import OwnerRouter from "./Routes/ownerRouter";
import UserRouter from "./Routes/userRouter";
import AdminRouter from "./Routes/adminRouter";
import Admin from "./features/admin";
import AdminDasboard from "./features/admin/dashboard";
import UserManagement from "./features/admin/user";
import OwnerDashboard from "./features/owner2/dashboard";
import ListUser from "./features/owner2/list_user/index";
import ListRoomManagement from "./features/owner2/list_room/index";
import Bill from "./features/owner2/bill/index";
import Create_Hostel from "./features/owner2/create_hostel/index";
import Create_Room from "./features/owner2/create_room/index";
import OwnerManagement from "./features/admin/owner";

function App() {
  const currentUser = useSelector((state) => state.login.infoUser?.roleId);

  return (
    <div className="App">
      {/* {
        currentUser ?
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} />
              <Route path='/listRoom' element={<ListRoom />} />
            </Route>
          </Routes> : <Routes>
            <Route path='/' element={<Authenticated />} />
          </Routes>
      } */}
      <Routes>
        <Route path="/" element={<Authenticated />} />
        <Route element={<UserRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/hostel" exact element={<Hostel />} />
          <Route path="/listRoom/:hostelId" exact element={<ListRoom />} />
          <Route
            path="/room/:roomId/:hostelId"
            exact
            element={<RoomDetail />}
          />
          <Route path="/profile" element={<Profile />}>
            <Route path="bill" element={<Profile />} />
            <Route path="account" element={<Profile />} />
            <Route path="booking" element={<Profile />} />
          </Route>
          {/* <Route path="/owner/*" exact element={<Owner />} /> */}
          <Route path="/booking" exact element={<Booking />} />
        </Route>
        <Route element={<OwnerRouter />}>
          <Route path="/owner" element={<Owner />}>
            <Route index element={<OwnerDashboard />} />
            <Route path="list_user" exact element={<ListUser />} />
            <Route path="list_room" exact element={<ListRoomManagement />} />
            <Route path="bill" exact element={<Bill />} />
            <Route path="create_hostel" exact element={<Create_Hostel />} />
            <Route path="create_room" exact element={<Create_Room />} />
          </Route>

          <Route path="/home" element={<Home />} />
          <Route path="/owner" exact element={<Owner />} />
          <Route path="/owner/*" exact element={<Owner />} />
        </Route>

        <Route element={<AdminRouter />}>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminDasboard />} />
            <Route path="user" element={<UserManagement />} />
            <Route path="owner" element={<OwnerManagement />} />
            {/* <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />}> */}
            {/* <Route index element={<AdminDasboard />}/> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
