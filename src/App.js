import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Authenticated from "./features/authenticated";
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
import HostelManagement from "./features/owner2/list_hostel/index";
import UpdateHostel from "./features/owner2/list_hostel/update";
import UpdateRoom from "./features/owner2/list_room/update";
import BookingManagement from "./features/owner2/list_booking";
import UpdateBill from "./features/owner2/bill/update";

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
        </Route>
        <Route element={<OwnerRouter />}>
          <Route path="/owner" element={<Owner />}>
            <Route index element={<OwnerDashboard />} />
            <Route path="list_user" element={<ListUser />} />
            <Route path="list_hostel" exact element={<HostelManagement />} />
            <Route path="list_hostel/update/:id" exact element={<UpdateHostel />}></Route>
            <Route path="list_room" exact element={<ListRoomManagement />} />
            <Route path="list_room/update/:id" exact element={<UpdateRoom />}></Route>
            <Route path="bill" exact element={<Bill />} />
            <Route path="bill/update/:id" exact element={<UpdateBill />}></Route>
            <Route path="booking" exact element={<BookingManagement />} />
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
