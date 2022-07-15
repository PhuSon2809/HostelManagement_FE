import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function UserRouter({ path, component: Component, exact, roles }) {
    // const isAuth = true

    const isAuth = useSelector(state => state.login.infoUser);
    const isUser = useSelector(state => state.login.infoUser.roleId);

    return isAuth && isUser === 2 ?
        <>
            <header>
                <Header />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
        : <Navigate to='/' />
}

export default UserRouter