import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Admin from "./features/admin";
import AdminDasboard from "./features/admin/dashboard";
import OwnerManagement from "./features/admin/owner";
import UserManagement from "./features/admin/user";
import Authenticated from "./features/authenticated";
import Home from "./features/home/Home";
import Hostel from "./features/hostels/Hostels";
import ListRoom from "./features/listRoom/ListRoom";
import Bill from "./features/owner2/bill/index";
import UpdateBill from "./features/owner2/bill/update";
import OwnerDashboard from "./features/owner2/dashboard";
import Owner from "./features/owner2/index";
import BookingManagement from "./features/owner2/list_booking";
import HostelManagement from "./features/owner2/list_hostel/index";
import UpdateHostel from "./features/owner2/list_hostel/update";
import ListRoomManagement from "./features/owner2/list_room/index";
import UpdateRoom from "./features/owner2/list_room/update";
import ListUser from "./features/owner2/list_user/index";
import Profile from "./features/profile/Profile";
import RoomDetail from "./features/roomDetail/RoomDetail";
import AdminRouter from "./Routes/adminRouter";
import OwnerRouter from "./Routes/ownerRouter";
import UserRouter from "./Routes/userRouter";

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
          <Route path="/hostel/" exact element={<Hostel />}>
            <Route path=":district" exact element={<ListRoom />} />
          </Route>
          <Route path="/listRoom/" exact element={<ListRoom />}>
            <Route path=":hostelId" exact element={<ListRoom />}>
              <Route path=":roomTypeName" exact element={<ListRoom />} />
            </Route>
          </Route>
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
            <Route
              path="list_hostel/update/:id"
              exact
              element={<UpdateHostel />}
            ></Route>
            <Route path="list_room" exact element={<ListRoomManagement />} />
            <Route
              path="list_room/update/:id"
              exact
              element={<UpdateRoom />}
            ></Route>
            <Route path="bill" exact element={<Bill />} />
            <Route
              path="bill/update/:id"
              exact
              element={<UpdateBill />}
            ></Route>
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
