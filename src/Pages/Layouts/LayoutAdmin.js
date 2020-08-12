import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import Topbar from '../../Components/Admin/Topbar'
import Footer from '../../Components/Admin/Footer'

export default ({ children }) => {
    return (

        <div >
            
            <Topbar />
            <div id="layoutSidenav">
                            <Sidebar />
                             <div className="container-fluid">
                                 {children}
                            </div>
                </div>           
                    <Footer />
           
        </div>
    )
}