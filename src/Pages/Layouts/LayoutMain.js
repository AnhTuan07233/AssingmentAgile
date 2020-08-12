import React from 'react';
import Header from '../../Components/Main/Header'
import Footer from '../../Components/Main/Footer'
import Navbar from '../../Components/Main/Navbar';
export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Navbar />
            <div className="container">
            <div className="user-page">
                <Header />
               
                <div className="content">
                    {children}
                </div>
                
            </div>
            
            </div>
            <Footer />
        </div>
    )
}