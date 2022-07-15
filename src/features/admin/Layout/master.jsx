import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Topbar from './../Topbar/Topbar';
import SidebarAdmin from './sidebar';
import "./css/admin.css"

function AdminLayout({ children }) {

    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    return (
        <React.Fragment>
            <Topbar reload={() => setReload(!reload)} />
            <div className='container_1'>
                <SidebarAdmin reload={() => setReload(!reload)} />
                <div className="main-content">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminLayout;